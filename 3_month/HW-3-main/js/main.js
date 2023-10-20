const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}


const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')


}




//DZ_3/1
let slideIndex = 0
const slidetime = () => {
    slideIndex++
    if(slideIndex > 3) {
        slideIndex=0
    }
    hideTabContent()
    showTabContent(slideIndex)
}

setInterval(slidetime, 1000)



//Modal
const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};

modalTrigger.addEventListener("click", openModal);

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if(event.target === modal) {
        closeModal();
    }
})



//DZ_3/2
openToScroll_End =()=> {
    window.addEventListener('scroll', () => {

            const documentHeight = document.documentElement.scrollHeight;

            const currentHeight = window.pageYOffset + document.documentElement.clientHeight;

            const isScrollEnd = Math.abs(documentHeight - currentHeight) < 10;

            if(isScrollEnd){
                openModal()

            }
        }
    )
}

window.addEventListener("scroll",openToScroll_End)

setTimeout(openModal,4000)
