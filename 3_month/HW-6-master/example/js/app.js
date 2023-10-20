const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");


const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) =>{
        item.classList.remove("tabheader__item_active");
    });
};



const showTabContent = (i=0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent()

tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabContent();
                showTabContent(i);
        } 
    });
  }
})

tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                slideIndex = i
                hideTabContent();
                showTabContent(slideIndex);
                clearInterval(time)
        } 
    });
  }
})

// hw slider with time
let slideIndex = 0
const slidetimer =()=>{
    slideIndex++
    if(slideIndex >3){
        slideIndex=0
    }
    hideTabContent()
    showTabContent(slideIndex)
}

const time =  setInterval(slidetimer, 1000)

const tabcontainer = document.querySelector('.tabcontainer')

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");
let checkOne = 0
const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    checkOne++
    console.log(checkOne)
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

// hW modal by scroll
openBytime=()=>{
    if(checkOne===0){
        setTimeout(openModal,60000)
        
    }
}

openBytime()

    openByScroll =(selector)=> {
        window.addEventListener('scroll', () => {
            // const bottom = scrollTop + pageYoffset
            
            const documentHeight = document.documentElement.scrollHeight;
            
            const currentHeight = window.pageYOffset + document.documentElement.clientHeight;
            
            const isScrollEnd = Math.abs(documentHeight - currentHeight) < 10;
            if(isScrollEnd && checkOne===0){
                openModal()
                
            }
        }
    )
}

window.addEventListener("scroll",openByScroll)

//HW-6
const forms = document.querySelectorAll("form");

const postData = (url,data)=>{
    const req = fetch(url,{
        method: "POST",
        headers:{
            "Content-type":"application/json",
        },
        body: data
    });
    return req

}

const bindPostData = (form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // const request = new XMLHttpRequest();
    // request.open("POST", "server.php");
    // request.setRequestHeader("Content-type", "application/json");
    const formData = new FormData(form);
    const obj = {};
    formData.forEach((item, i) => {
      obj[i] = item;
    });
    // const json = JSON.stringify(obj);
    // request.send(json);
    // request.addEventListener("load", () => {
    //   if (request.status === 200) {
    //     console.log(request.response);
    //   } else {
    //     console.log("error");
    //   }
    // });
    postData("server.php",JSON).then((data)=>console.log(data)).then(()=>console.log("Успех")).catch(()=>console.log("error"))
  });
};

forms.forEach((item) => {
  bindPostData(item);
});




