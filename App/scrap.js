let btnScrapProfile = document.querySelector('#btnScrapProfile'),
    btnScrapProfiles = document.querySelector('#btnScrapProfiles');

btnScrapProfile.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const port = chrome.tabs.connect(tab.id);
    port.postMessage({ acction: 'scraping profile' });
});

btnScrapProfiles.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const port = chrome.tabs.connect(tab.id);
    port.postMessage({ acction: 'scraping profiles' });
});