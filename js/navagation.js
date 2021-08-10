const indexPage = document.querySelector(`#index-page`);
const aboutPage = document.querySelector(`#about-page`);
const workPage = document.querySelector(`#work-page`);
const contactPage = document.querySelector(`#contact-page`);
const homeLink = document.querySelectorAll(`.homeLink`);
const aboutLink = document.querySelectorAll(`.aboutLink`);
const workLink = document.querySelectorAll(`.workLink`);
const contactLink = document.querySelectorAll(`.contactLink`);

const viewMyW = document.querySelector(`#viewMyW`);

const mySkills = [c, python, algo, html, react, firebase, numpy, scikit, tf, git];

const myNumsB = [certificateNum, hoursNum, projectsNum];

let currentDisplay = indexPage;
currentDisplay.style.display = "block";

viewMyW.addEventListener("click", () => {
  currentDisplay.style.display = "none";
  currentDisplay = workPage;
  currentDisplay.style.display = "block";
});

homeLink.forEach((el) => {
  el.addEventListener("click", () => {
    currentDisplay.style.display = "none";
    homeA.style.left = "75%";
    currentDisplay = indexPage;
    myNumsB.forEach((el) => (el.textContent = "0"));
    activeCounter = true;
    currentDisplay.style.display = "block";
  });
});
aboutLink.forEach((el) => {
  el.addEventListener("click", () => {
    currentDisplay.style.display = "none";
    currentDisplay = aboutPage;
    mySkills.forEach((el) => (el.style.width = "0"));
    activate = true;
    currentDisplay.style.display = "block";
  });
});
workLink.forEach((el) => {
  el.addEventListener("click", () => {
    currentDisplay.style.display = "none";
    currentDisplay = workPage;
    currentDisplay.style.display = "block";
  });
});
contactLink.forEach((el) => {
  el.addEventListener("click", () => {
    currentDisplay.style.display = "none";
    currentDisplay = contactPage;
    currentDisplay.style.display = "block";
  });
});
