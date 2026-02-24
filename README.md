# Auto View Mode

An [Obsidian](https://obsidian.md) plugin that automatically switches between Reading View, Source Mode, and Live Preview when you open a note -- based on a frontmatter key.

## Features

- Set a per-note view mode using frontmatter
- Configurable frontmatter key name (default: `auto-view-mode`)
- Supports all three Obsidian view modes: Reading View, Source Mode, and Live Preview
- Lightweight with no external dependencies

## Installation

### From Obsidian Community Plugins

1. Open **Settings** > **Community Plugins**
2. Search for **Auto View Mode**
3. Click **Install**, then **Enable**

### Manual Installation

1. Download `main.js` and `manifest.json` from the [latest release](../../releases/latest)
2. Create a folder called `auto-view-mode` in your vault's `.obsidian/plugins/` directory
3. Copy `main.js` and `manifest.json` into that folder
4. Restart Obsidian and enable the plugin in **Settings** > **Community Plugins**

## Usage

Add the frontmatter key to any note to control which view mode it opens in:

```yaml
---
auto-view-mode: preview
---
```

### Accepted Values

| Value | View Mode |
|-------|-----------|
| `preview` or `reading` | Reading View |
| `source` | Source Mode |
| `edit` or `live` | Live Preview |

### Custom Frontmatter Key

By default the plugin reads from the `auto-view-mode` frontmatter key. You can change this to any name you like in the plugin settings:

1. Go to **Settings** > **Auto View Mode**
2. Change the **Frontmatter key** field to your preferred key name

For example, if you set it to `view`, your frontmatter would look like:

```yaml
---
view: source
---
```

## License

[MIT](LICENSE)
