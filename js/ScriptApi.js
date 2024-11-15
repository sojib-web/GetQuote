// @ts-nocheck
const quoteEl = document.querySelector("#quote");
const authorEl = document.querySelector("#author");
const buttonEl = document.querySelector("#button");

const urlAPI = "https://api.api-ninjas.com/v1/inflation?country=Canada";
const keyAPI = "hyx6EYaUk5nZaiAaY4uBnw==met18E5Plh6BMs6j";

const getQoute = () => {
  fetch(urlAPI, {
    headers: { "X-Api-Key": keyAPI },
  })
    .then((data) => data.json())
    .then((item) => {
      quoteEl.textContent = item[0].country;
      authorEl.textContent = item[0].period;

      console.log(item);
    });
};
getQoute();

buttonEl.addEventListener("click", getQoute);
