// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
    const url = new URL(details.url);
    if (url.hostname === 'twitter.com' || url.hostname === 'x.com') {
        const newUrl = 'https://nitter.net' + url.pathname + url.search + url.hash;
        await chrome.tabs.update(details.tabId, { url: newUrl });
    }
});
