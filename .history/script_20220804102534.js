const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const result = chrome.tabs.query({active: true, currentWindow: true})
});
