import { MarkdownView, Plugin, PluginSettingTab, App, Setting, TFile } from "obsidian";

interface AutoViewModeSettings {
	frontmatterKey: string;
}

const DEFAULT_SETTINGS: AutoViewModeSettings = {
	frontmatterKey: "auto-view-mode",
};

export default class AutoViewModePlugin extends Plugin {
	settings!: AutoViewModeSettings;

	async onload() {
		await this.loadSettings();

		this.addSettingTab(new AutoViewModeSettingTab(this.app, this));

		this.registerEvent(
			this.app.workspace.on("file-open", (file) => {
				if (file) {
					this.applyViewMode(file);
				}
			}),
		);
	}

	private applyViewMode(file: TFile): void {
		const cache = this.app.metadataCache.getFileCache(file);
		const key = this.settings.frontmatterKey.trim();
		if (!key) return;

		const value: unknown = cache?.frontmatter?.[key];
		if (typeof value !== "string") return;

		const modeMap: Record<string, { mode: string; source?: boolean }> = {
			preview: { mode: "preview" },
			reading: { mode: "preview" },
			source: { mode: "source", source: true },
			edit: { mode: "source", source: false },
			live: { mode: "source", source: false },
		};

		const stateUpdate = modeMap[value.trim().toLowerCase()];
		if (!stateUpdate) return;

		window.setTimeout(() => {
			const view = this.app.workspace.getActiveViewOfType(MarkdownView);
			if (!view) return;
			if (view.file?.path !== file.path) return;

			const currentState =
				typeof view.getState === "function" ? view.getState() : {};
			const newState = { ...currentState, ...stateUpdate };
			void view.setState(newState, { history: false });
		}, 100);
	}

	async loadSettings() {
		const data = (await this.loadData()) as Partial<AutoViewModeSettings> | null;
		this.settings = { ...DEFAULT_SETTINGS, ...(data ?? {}) };
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class AutoViewModeSettingTab extends PluginSettingTab {
	plugin: AutoViewModePlugin;

	constructor(app: App, plugin: AutoViewModePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		new Setting(containerEl)
			.setName("Frontmatter key")
			.setDesc(
				"The frontmatter property name to read the view mode from. " +
				"Change this to any key you prefer.",
			)
			.addText((text) =>
				text
					.setPlaceholder("E.g., auto-view-mode")
					.setValue(this.plugin.settings.frontmatterKey)
					.onChange(async (value) => {
						this.plugin.settings.frontmatterKey = value;
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl).setName("Usage").setHeading();

		const usageDesc = containerEl.createEl("div", {
			cls: "setting-item-description",
		});

		const key = this.plugin.settings.frontmatterKey || "auto-view-mode";

		usageDesc.createEl("p", {
			text: "Add the following to any note's frontmatter to control which view mode it opens in:",
		});

		const codeBlock = usageDesc.createEl("pre");
		codeBlock.createEl("code", {
			text:
				"---\n" +
				key + ": preview   # Reading view\n" +
				key + ": source    # Source mode\n" +
				key + ": edit      # Live preview\n" +
				"---",
		});

		usageDesc.createEl("p", {
			text: "Accepted values:",
		});

		const list = usageDesc.createEl("ul");
		list.createEl("li", {
			text: '"preview" or "reading" -- opens in reading view',
		});
		list.createEl("li", {
			text: '"source" -- opens in source mode',
		});
		list.createEl("li", {
			text: '"edit" or "live" -- opens in live preview (editor mode)',
		});
	}
}
