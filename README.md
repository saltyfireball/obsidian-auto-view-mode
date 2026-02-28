# Auto View Mode

![works on my machine](https://img.shields.io/badge/worksonmymachien-on%20my%20machine-fff?style=flat&logo=apple&logoColor=FFFFFF&logoSize=FF6188&label=works&labelColor=5B595C&color=A9DC76) ![Pog Level](https://img.shields.io/badge/pog%20level-over%209000-fff?style=flat&logo=twitch&logoColor=FFFFFF&label=pog%20level&labelColor=5B595C&color=5C7CFA) ![Git History](https://img.shields.io/badge/git%20history-force%20pushed-fff?style=flat&logo=git&logoColor=FFFFFF&label=git%20history&labelColor=5B595C&color=78DCE8) ![Touch Grass](https://img.shields.io/badge/touch%20grass-pending-fff?style=flat&logo=treehouse&logoColor=FFFFFF&label=touch%20grass&labelColor=5B595C&color=FC9867) ![Image Hosting](https://img.shields.io/badge/image%20hosting-link%20expired-fff?style=flat&logo=imgur&logoColor=FFFFFF&label=image%20hosting&labelColor=5B595C&color=FFD866) ![Indentation](https://img.shields.io/badge/indentation-spaces%20obviously-fff?style=flat&logo=editorconfig&logoColor=FFFFFF&label=indentation&labelColor=5B595C&color=78DCE8) ![Vaporwave](https://img.shields.io/badge/vaporwave-aesthetic-fff?style=flat&logo=soundcloud&logoColor=FFFFFF&label=vaporwave&labelColor=5B595C&color=FF6188) ![Sock Drawer](https://img.shields.io/badge/sock%20drawer-solo%20socks%20only-fff?style=flat&logo=adidas&logoColor=FFFFFF&label=sock%20drawer&labelColor=5B595C&color=FF6188) ![CD](https://img.shields.io/badge/cd-AOL%20free%20trial-fff?style=flat&logo=discogs&logoColor=FFFFFF&label=CD&labelColor=5B595C&color=FC9867)

<p align="center">
  <img src="assets/header.svg" width="600" />
</p>

An [Obsidian](https://obsidian.md) plugin that automatically switches between Reading View, Source Mode, and Live Preview when you open a note -- based on a frontmatter key.

## Features

- Set a per-note view mode using frontmatter
- Configurable frontmatter key name (default: `auto-view-mode`)
- Supports all three Obsidian view modes: Reading View, Source Mode, and Live Preview
- Lightweight with no external dependencies

## Installation

### From Obsidian Community Plugins

**Might not be approved yet**

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

| Value                  | View Mode    |
| ---------------------- | ------------ |
| `preview` or `reading` | Reading View |
| `source`               | Source Mode  |
| `edit` or `live`       | Live Preview |

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
