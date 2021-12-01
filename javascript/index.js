const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");

const getNewQuote = async () => {
  var url = "https://type.fit/api/quotes";
  const response = await fetch(url);

const allQuotes = await response.json();
const indx = Math.floor(Math.random() * allQuotes.length);
const quote = allQuotes[indx].text;
const auth = allQuotes[indx].author;
  if (auth == null) {
    author = "Anonymous";
  }

  const text = document.getElementById("quote");
  const author = document.getElementById("author");

  text.innerHTML = quote;
  author.innerHTML = "~ " + auth;
  tweetButton.href = "https://twitter.com/intent/tweet?text=" + quote + " ~ " + auth;
}
getNewQuote();

//  function changeBackgroundColor() {
//    var element = document.getElementById("main");
//    element.style.backgroundColor = "blue";
//  }


function changeBackgroundColor() {
const background = document.getElementById("body");

const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

const getRandomColor = () => {
  const h = getRandomNumber(360);
  // const s = getRandomNumber(100);
  // const l = getRandomNumber(100);

  // return `hsl(${h}deg, ${s}%, ${l}%)`;
  return `hsl(${h}deg, 100%, 90%)`;
};

const setBackgroundColor = () => {
  const randomColor = getRandomColor();
  background.style.backgroundColor = randomColor;
  background.style.color = randomColor;
};

setBackgroundColor();
}
