// const { getCounter, putCounter } = require("../../server/controllers/counterController");

const letters = "ABCDEFGHIJKLMNOPRSTUVXT";
let result = [];
let counter;

const loadCounter = async () => {
  try {
    const response = await fetch("http://localhost:3000/app/counter");
    const data = await response.json();
    counter = data[0].counter;
  } catch (error) {
    console.error("Counter Error LoadCounter PetTokenGenerator", error);
  }
};

const saveCounter = async () => {
  try {
    const response = await fetch("http://localhost:3000/app/counter", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", //Indicando que es un JSON
      },
    });
  } catch (error) {
    console.error("Counter Error SaveCounter PetTokenGenerator", error);
  }
};

export const petTokenGenerator = async () => {
  result = [];
  await loadCounter();
  console.log(counter);
  console.log("counter en pet " + counter);

  while (result.length <= 3) {
    if (result.length < 2) {
      result.push(randomLetter());
    } else if (result.length >= 2) {
      result.push(randomNumber());
    }
  }

  await saveCounter();
  result.push(counter);

  const token = result.join(""); // QUITAR ESTO AHORITA
  return token;
};

const randomLetter = () => {
  return letters[Math.floor(Math.random() * letters.length)];
};

const randomNumber = () => {
  return Math.floor(Math.random() * 9);
};
