# Clear Current Tab Cache

A lightweight Chrome extension that clears the browser cache for the current tab's domain with a single click.

## Features

- **Single-click cache clearing** - Just click the extension icon to clear cache
- **Domain-specific** - Only clears cache for the current tab's origin, not your entire browser
- **Minimal permissions** - Only requests the permissions it needs
- **Auto-closes** - Popup automatically closes after clearing cache
- **Visual feedback** - Shows success/error status with the affected domain

## Installation

### From Source
1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder

### From Chrome Web Store
Coming soon.

## Usage

1. Navigate to any website
2. Click the extension icon in your toolbar
3. Cache for that domain is automatically cleared
4. The popup shows confirmation and closes automatically

## Permissions

- `browsingData` - Required to clear cache data
- `activeTab` - Required to get the current tab's URL
- `tabs` - Required to query tab information

## Files

```
├── manifest.json    # Extension configuration
├── popup.html       # Popup UI
├── popup.js         # Cache clearing logic
└── icons/           # Extension icons
    ├── icon16.png
    ├── icon48.png
    ├── icon128.png
    └── icon.svg     # Source icon
```

## License

This project is released under the MIT License. See [LICENSE](LICENSE) for details.

Do whatever you want with it.
