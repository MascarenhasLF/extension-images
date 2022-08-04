const button = document.querySelector(".btn");
const input = document.querySelector("input");

const replaceImages = () => {
  const gifs = [
    "https://c.tenor.com/19R21_xO-v4AAAAC/bonz-hero.gif",
    "https://c.tenor.com/4PyKLcgGMtMAAAAM/nicolas-cage-you.gif",
    "https://supernaturalwriting.files.wordpress.com/2019/10/nicholas-cage-black-sunglasses-gif.gif?w=372",
  ];

  const images = document.querySelectorAll("img");
  images.forEach((image, index) => {
    image.src = gifs[index % gifs.length];
  });
};

button.addEventListener("click", async (event) => {
  event.preventDefault();

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: replaceImages,
    args: [],
  });
});
