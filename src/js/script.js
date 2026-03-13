import { PeopleData } from "./js-exercises/exercise01.js";

/** =============== Button active the navbar ===============  */

const barsButton = document.querySelector("#bars-btn");
const playgroundNavbar = document.querySelector(".base-navbar");

barsButton.addEventListener("click", () => {
  playgroundNavbar.classList.toggle("active");
})

/** ============ Digit Effect and Console Logic ============ */

const buttonTopicOne = document.querySelector(".topic-one");
const spanHtmlTag = document.querySelector("span");
const initialText = "My code's results will appear here! Stay stuned!";

let isDeleting = false;
let count = 0;
let digitAceleration;
let setTime;

function digitEffect() {
  spanHtmlTag.textContent = initialText.substring(0, count);

  if (!isDeleting && count === initialText.length) {
    isDeleting = true;
  }

  else if (isDeleting && count === 0) {
    isDeleting = false;
  }

  if (isDeleting) {
    count--;
  }

  else {
    count++;
  }

  digitAceleration = isDeleting ? 50 : 150;

  setTime = setTimeout(digitEffect, digitAceleration);
}


digitEffect();

buttonTopicOne.addEventListener("click", () => {
  clearTimeout(setTime);

  try {
    const listOfMasculineHeight = [];
    const listOfFeminineGender = [];
    const listOfHeight = [];

    for (let c = 0; c < 15; c++) {
        let gender = window.prompt("Enter with your gender: [M/F]: ");
        let height = window.prompt("Enter with your height(in meters scale): ").replace(",", ".");

        if (!gender || !height)
            throw new Error("You need to enter with the input!");

        if (gender.toLocaleUpperCase() === "F") {
            listOfFeminineGender.push(gender);
        }

        else if (gender.toLocaleUpperCase() === "M") {
            listOfMasculineHeight.push(parseFloat(height));
        }

        else
            throw new Error("Invalid Gender! Put M or F!");

        listOfHeight.push(parseFloat(height));
    }

    const data = new PeopleData(listOfHeight, listOfFeminineGender)

    spanHtmlTag.style.color = "var(--accent-success)";

    spanHtmlTag.innerHTML = (`==== Data Collect On Group ====<br>
    [ ${data.getHiggerHeight()}m ] is the biggest height of the group;<br>
    [ ${data.getLowerHeight()}m ] is the lowest height of the group;<br>
    [ ${data.getAverageHeight(listOfMasculineHeight).toFixed(2)}m ] is the average of masculine heights<br>
    [ ${data.quantityGenderFeminine()} ] is the quantity of feminine gender.`);
  }

  catch (error) {
    spanHtmlTag.style.color = "var(--accent-error)";

    spanHtmlTag.textContent = `❌ Error: ${error.message}`;
  }
})
