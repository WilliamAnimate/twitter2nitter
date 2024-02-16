chrome.webNavigation.onBeforeNavigate.addListener(function(d) {
	const url = new URL(d.url);
	if (url.hostname == 'twitter.com' || url.hostname == 'x.com') {
		const newUrl = 'https://nitter.kylrth.com' + url.pathname + url.search + url.hash;
		chrome.tabs.update(d.tabId, {url: newUrl});
	}
});
