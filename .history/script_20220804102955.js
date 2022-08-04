const form = document.querySelector('form');

const replaceImages = () => {
    document.body.style
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: replaceImages,
    });
});
