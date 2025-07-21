const optionLang = document.getElementById("option-lang");
const cards = document.getElementById("cards");

const arText = document.querySelectorAll(".ar-text");
const enText = document.querySelectorAll(".en-text");

// let currentLang = localStorage.getItem("lang");

const urlParams = new URLSearchParams(window.location.search);
const currentLang = urlParams.get('lang');


let IsEn = true;
function updateLanguage(currentLang) {
 
  if (currentLang === "ar") {
    
    IsEn = false;
    
    cards.setAttribute("lang", "ar");
    cards.setAttribute("dir", "rtl");
    
    arText.forEach((el) => (el.style.display = "block"));
    enText.forEach((el) => (el.style.display = "none"));
    
    localStorage.setItem("lang", "ar");
    
  } else {
    
    cards.setAttribute("lang", "en");
    cards.setAttribute("dir", "ltr");
    
    arText.forEach((el) => (el.style.display = "none"));
    enText.forEach((el) => (el.style.display = "block"));
    localStorage.setItem("lang", "en");
    
  }
  IsEn == true? document.body.style.fontFamily = '"Inter", sans-serif': document.body.style.fontFamily = "'Cairo', sans-serif";

}

// Initialize
updateLanguage(currentLang);

// optionLang.addEventListener("click", () => {
//   currentLang = currentLang === "ar" ? "en" : "ar";
//   updateLanguage();
// });
