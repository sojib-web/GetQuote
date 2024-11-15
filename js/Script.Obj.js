// @ts-nocheck
const randomQuotes = [
  {
    quote:
      "Don’t gain the world and lose your soul, wisdom is better than silver or gold",
    source: "Bob Marley",
  },
  {
    quote:
      "Lighten up, just enjoy life, smile more, laugh more, and don’t get so worked up about things",
    source: "Kenneth Branagh",
  },
  {
    quote: "Don’t cry because it’s over, smile because it happened",
    source: "Ludwig Jacobowski",
  },
  {
    quote:
      "Do stuff. Be clenched, curious. Not waiting for inspiration’s shove or society’s kiss on your forehead. Pay attention. It’s all about paying attention. Attention is vitality. It connects you with others. It makes you eager. Stay eager",
    source: "Susan Sontag",
  },
];

const quoteEl = document.querySelector("#quote");
const authorEl = document.querySelector("#author");
const buttonEl = document.querySelector("#button");

const autoQuote = () => {
  const quoteIndex = Math.floor(Math.random() * randomQuotes.length);
  quoteEl.textContent = randomQuotes[quoteIndex].quote;
  authorEl.textContent = randomQuotes[quoteIndex].source;

  console.log(quoteIndex);
};

autoQuote();
buttonEl.addEventListener("click", autoQuote);
