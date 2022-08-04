console.log("Background rodando");

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

chrome.tabs.onUpdated.addListener(function (tabId) {
  console.log("tab atualizou");
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    function: replaceImages,
    args: [],
  });
});
