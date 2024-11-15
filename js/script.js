// @ts-nocheck
const randomQuote = [
  " We chase what's sexy and miss what matters.",

  "While excitement starts something, execution completes it.",

  "While speed makes a good story, velocity makes an outcome.",

  "While complexity makes you sound smart, focusing on",

  "the key basics matters more.",

  "While new commands our attention, nature offers insight.",
];

const quoteEl = document.querySelector("#quote");
const authorEl = document.querySelector("#author");
const buttonEl = document.querySelector("#button");

const autoQuote = () => {
  const quoteIndex = Math.floor(Math.random() * randomQuote.length);
  quoteEl.textContent = randomQuote[quoteIndex];
  console.log(quoteIndex);
};

autoQuote();
buttonEl.addEventListener("click", autoQuote);
