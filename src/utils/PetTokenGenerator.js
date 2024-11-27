// const { getCounter, putCounter } = require("../../server/controllers/counterController");
import { getCounter, putCounter } from "../../server/controllers/counterController";

const letters = "ABCDEFGHIJKLMNOPRSTUVXT";
let result = [];
let counter;

const loadCounter = async () => {
  try {
    counter = await getCounter();
  } catch (error) {
    console.error("Counter Error LoadCounter PetTokenGenerator", error);
  }
};

const saveCounter = async () => {
  try {
    const counterPlusOne = await putCounter();
    console.log("Nuevo valor del counter: " + counterPlusOne);
  } catch (error) {
    console.error("Counter Error SaveCounter PetTokenGenerator", error);
  }
};

export const petTokenGenerator = async () => {
  await loadCounter();
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

  console.log(result.join("")); // QUITAR ESTO AHORITA
  return result.join();
};

const randomLetter = () => {
  return letters[Math.floor(Math.random() * letters.length)];
};

const randomNumber = () => {
  return Math.floor(Math.random() * 9);
};
