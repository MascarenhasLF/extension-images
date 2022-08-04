const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const  = await chrome.tabs.query({active: true, currentWindow: true});
});
