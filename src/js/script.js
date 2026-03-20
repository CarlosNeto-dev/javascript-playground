import { PeopleData } from "./js-exercises/exercise01.js";
import { studentFunction } from "./js-exercises/exercise02.js"

/** =============== Button active the navbar ===============  */

const barsButton = document.querySelector("#bars-btn");
const playgroundNavbar = document.querySelector(".base-navbar");

barsButton.addEventListener("click", () => {
  playgroundNavbar.classList.toggle("active");
})

/** ============ Digit Effect and Console Logic ============ */

const buttonTopicOne = document.querySelector(".topic-one");
const buttonTopicTwo = document.querySelector(".topic-two");
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

buttonTopicTwo.addEventListener("click", () => {
  clearTimeout(setTime);
  
  const studentData = [
  { "nome": "Maria Joaquinha", "notas": [8,7.5,9], "curso": "Sistemas para Internet"},
  { "nome": "João Ricardo", "notas": [8,8.5,5], "curso": "Direito"},
  { "nome": "José Henrique", "notas": [4,10,7], "curso": "Administração"},
  { "nome": "Pedro da Silva", "notas": [6,7.6,7.5], "curso": "Sistemas para Internet"}, 
  { "nome": "Silvana Morais", "notas": [6,7.5,9.5], "curso": "Sistemas de Informação"}, 
  { "nome": "Patricia Castro", "notas": [1,9,10], "curso": "Arquitetura"}, 
  { "nome": "Joana Ribeiro", "notas": [8,9,9], "curso": "Contabilidade"}, 
  { "nome": "Rafael Rocha", "notas": [4,4,9], "curso": "Sistemas para Internet"}, 
  { "nome": "Gustavo Henrique", "notas": [8,7.5,5], "curso": "Sistemas para Internet"}
  ]

  const transformObject = JSON.parse(JSON.stringify(studentData));

  try {
    spanHtmlTag.style.color = "var(--accent-success)";
    
    spanHtmlTag.innerHTML = studentFunction(transformObject);
  }

  catch (error) {
    spanHtmlTag.style.color = "var(--accent-error)";

    spanHtmlTag.textContent = `❌ Error: ${error.message}`;
  }

})