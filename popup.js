async function clearCacheForCurrentTab() {
  const content = document.getElementById('content');

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab.url) {
      showError('Cannot access this tab');
      return;
    }

    const url = new URL(tab.url);
    const origin = url.origin;
    const hostname = url.hostname;

    if (!origin.startsWith('http')) {
      showError('Cannot clear cache for browser pages');
      return;
    }

    await chrome.browsingData.remove(
      { origins: [origin] },
      { cache: true }
    );

    content.innerHTML = `
      <div class="status success">
        <span class="icon">&#10003;</span>
        <span>Cache cleared!</span>
      </div>
      <div class="domain">${hostname}</div>
    `;

    // Auto-close after 1.5 seconds
    setTimeout(() => window.close(), 1500);

  } catch (error) {
    showError('Failed to clear cache');
  }
}

function showError(message) {
  const content = document.getElementById('content');
  content.innerHTML = `
    <div class="status error">
      <span class="icon">&#10007;</span>
      <span>${message}</span>
    </div>
  `;
  setTimeout(() => window.close(), 2000);
}

clearCacheForCurrentTab();
