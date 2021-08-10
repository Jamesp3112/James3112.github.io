const aboutB = document.querySelector(`#about-b`);
const c = document.querySelector(`#skillsC`);
const python = document.querySelector(`#skillsPython`);
const algo = document.querySelector(`#skillsAlgo`);
const html = document.querySelector(`#skillsHtml`);
const react = document.querySelector(`#skillsReact`);
const firebase = document.querySelector(`#skillsFirebase`);
const numpy = document.querySelector(`#skillsNumpy`);
const scikit = document.querySelector(`#skillsScikit`);
const tf = document.querySelector(`#skillstf`);
const git = document.querySelector(`#skillsgit`);



const cR = 80;
const pythonR = 70;
const algoR = 75;
const htmlR = 80;
const reactR = 70;
const firebaseR = 65;
const numpyR = 85;
const scikitR = 85;
const tfR = 80;
const gitR = 80;

let activate = true;

const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      if (activate) {
        activate = false;
        setTimeout(() => {
          c.style.width = `${cR}%`;
        }, 100);
        setTimeout(() => {
          python.style.width = `${pythonR}%`;
        }, 300);
        setTimeout(() => {
          algo.style.width = `${algoR}%`;
        }, 500);
        setTimeout(() => {
          html.style.width = `${htmlR}%`;
        }, 700);
        setTimeout(() => {
          react.style.width = `${reactR}%`;
        }, 900);
        setTimeout(() => {
          firebase.style.width = `${firebaseR}%`;
        }, 1100);
        setTimeout(() => {
          numpy.style.width = `${numpyR}%`;
        }, 1300);
        setTimeout(() => {
          scikit.style.width = `${scikitR}%`;
        }, 1500);
        setTimeout(() => {
          tf.style.width = `${tfR}%`;
        }, 1700);
        setTimeout(() => {
          git.style.width = `${gitR}%`;
        }, 1900);
      }
    }
  },
  { threshold: [0.5] }
);

observer.observe(aboutB);


