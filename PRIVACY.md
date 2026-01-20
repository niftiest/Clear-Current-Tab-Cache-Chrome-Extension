# Privacy Policy

**Clear Current Tab Cache** is committed to protecting your privacy.

## Data Collection

This extension does **not** collect, store, or transmit any user data.

Specifically, we do not collect:
- Personally identifiable information
- Browsing history
- Website content
- Authentication information
- Financial information
- Health information
- Location data
- User activity or behavior data

## How the Extension Works

When you click the extension icon, it:
1. Reads the current tab's URL to determine the domain
2. Calls Chrome's built-in `browsingData.remove()` API to clear cached data for that specific domain
3. Displays a confirmation message

All operations happen locally in your browser. No data is sent to any external servers.

## Permissions

The extension requires the following permissions solely to perform its core function:

- **browsingData**: To clear cache for the specified origin
- **activeTab**: To access the current tab's URL
- **tabs**: To query active tab information

These permissions are used exclusively for cache clearing and nothing else.

## Third Parties

This extension does not:
- Share data with third parties
- Use analytics or tracking
- Include advertisements
- Make network requests

## Changes to This Policy

If this privacy policy changes, the updated policy will be posted here.

## Contact

If you have questions about this privacy policy, please open an issue on our [GitHub repository](https://github.com/niftiest/Clear-Current-Tab-Cache-Chrome-Extension).

---

*Last updated: January 2025*
