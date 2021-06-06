const header__bottom = document.querySelector(".header__bottom");
const header = document.querySelector("#header");


header__bottom.addEventListener("mouseover", () => {
    header__bottom.style.height = "auto";

});

header__bottom.addEventListener("mouseout", () => {
    header__bottom.style.height = "40px";
});






// when click Language list downdrop
const selectLinkToggle = document.querySelector(".select__link__off");
const selectList = document.querySelector(".select__list");
selectLinkToggle.addEventListener("click", () => {
    selectList.classList.toggle("on");
});

const ftselectLinkToggle = document.querySelector(".footer__right .select__link__off ")
const fterSelectList = document.querySelector(".footer__right .select__list");
ftselectLinkToggle.addEventListener("click", () => {
    fterSelectList.classList.toggle("on");
});




// banner auto slide show.

const slideList = document.querySelectorAll(".banner__slide__list");
const bannerBtn = document.querySelector(".banner__button");
let leftValue = -250;



// when scroll navbar fixed
const headerGnb = document.querySelector("#header");
const headerHeight = headerGnb.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    if (0 < window.scrollY) {
        headerGnb.classList.add("scrollmode");
    }
    else {
        headerGnb.classList.remove("scrollmode");
    }
});

// when search btn click
const searchBtn = document.querySelector(".header__search .searh__btn");
const searchText = document.querySelector(".header__search .search");
const closeBtn = document.querySelector(".close__btn");

searchBtn.addEventListener("click", () => {
    searchText.classList.add("on");
});
closeBtn.addEventListener("click", () => {
    searchText.classList.remove("on");
});