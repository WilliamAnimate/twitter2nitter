// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

chrome.webNavigation.onBeforeNavigate.addListener(function(d) {
	const url = new URL(d.url);
	if (url.hostname == 'twitter.com' || url.hostname == 'x.com') {
		const newUrl = 'https://xcancel.com' + url.pathname + url.search + url.hash;
		chrome.tabs.update(d.tabId, {url: newUrl});
	}
});
