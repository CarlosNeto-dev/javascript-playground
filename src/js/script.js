/** =============== Button active the navbar ===============  */

const barsButton = document.querySelector("#bars-btn");
const playgroundNavbar = document.querySelector(".base-navbar");

barsButton.addEventListener("click", () => {
  playgroundNavbar.classList.toggle("active");
})

/** ============ Digit Effect and Console Logic ============ */

const buttonTopicOne = document.querySelector(".button-topic-one");
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
    
  }

  catch (error) {
    spanHtmlTag.style.color = "var(--accent-error)";
    spanHtmlTag.textContent = `❌ Error: ${error.message}`;
  }
})

