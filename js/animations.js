const homeA = document.querySelector(`#home-a`);
const homeB = document.querySelector(`#home-b`);
const certificateNum = document.querySelector(`#certificateNum`);
const hoursNum = document.querySelector(`#hoursNum`);
const projectsNum = document.querySelector(`#projectsNum`);

const myCert = 5;
const myHours = 1000;
const myprojects = 15;

let activeCounter = true;

const observerHome = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      homeA.style.left = `0px`;
    }
  },
  { threshold: [0.15] }
);

const myNums = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      if (activeCounter) {
        activeCounter = false;
        for (let i = 0; i <= myCert; i++) {
          setTimeout(() => {
            certificateNum.textContent = i;
          }, 150 * i);
        }
        for (let i = 0; i <= myHours; i += 10) {
          setTimeout(() => {
            if (i !== 1000) {
              hoursNum.textContent = i;
            } else {
              hoursNum.textContent = "1000+";
            }
          }, 1.5 * i);
        }
        for (let i = 0; i <= myprojects; i++) {
          setTimeout(() => {
            projectsNum.textContent = i;
          }, 75 * i);
        }
      }
    }
  },
  { threshold: [0.75] }
);

observerHome.observe(homeA);
myNums.observe(homeB);
