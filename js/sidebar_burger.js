//exit the sidebar_phone
const exit = document.querySelectorAll('main, footer, #sidebar_phone_burger_exit');
exit.forEach((elem)=>{
    //for all selected element, apply click
    elem.addEventListener('click',()=>{
        const sidebar_phone_burger = document.getElementById('sidebar_phone_burger');
        const img = sidebar_phone_burger_div.querySelector('img');
        //verify if sidebar_phone is opened
        if(img.src.includes('cross_icon.png')){
            //change cross img to burger img
            sidebar_phone_burger_div.innerHTML = '<img src="../img/icons/burger_icon.png">';
            const sidebar_phone_container = document.getElementById('sidebar_phone_container');
            //set height of sidebar_phone to 0
            sidebar_phone_container.style.height = '0px';
            //Allow page scrolling
            document.querySelector('body').style.overflow = 'visible';
            //Remove properties to sidebar_phone
            sidebar_phone_burger.classList.remove("sidebar_phone_burger_added");
            sidebar_phone_container.classList.remove("sidebar_phone_container_added");
            //set brightness to normal when removeing sidebar_phone
            exit.forEach((elem)=>{
                elem.style.filter = "brightness(100%)";
                elem.style.pointerEvents = 'auto';
            })
        }
    })
})

//Burger menu click
const sidebar_phone_burger_div = document.getElementById('sidebar_phone_burger_div');
sidebar_phone_burger_div.addEventListener("click",()=>{
    const sidebar_phone_container = document.getElementById('sidebar_phone_container');
    const sidebar_phone_burger_div = document.getElementById('sidebar_phone_burger_div');
    const sidebar_phone_burger = document.getElementById('sidebar_phone_burger');
    const img = sidebar_phone_burger_div.querySelector('img');
    //If cross image, close the menu
    if(img.src.includes('cross_icon.png')){
        //Change Image for next opening
        sidebar_phone_burger_div.innerHTML = '<img src="../img/icons/burger_icon.png">';
        //Remove sidebar_phone css added
        sidebar_phone_container.classList.remove("sidebar_phone_container_added");
        sidebar_phone_burger.classList.remove("sidebar_phone_burger_added");
        //sidebar_phone height = 0
        sidebar_phone_container.style.height = '0px';
        //Allow Overflow for the page
        document.querySelector('body').style.overflow = 'visible';
        //set brightness to normal when removing sidebar_phone
        exit.forEach((elem)=>{
            elem.style.filter = "brightness(100%)";
            elem.style.pointerEvents = 'auto';
        })
    }
    //Open sidebar_phone when burger clicked
    else if(img.src.includes('burger_icon.png')){
        //set image for next sidebar_phone closes
        sidebar_phone_burger_div.innerHTML = '<img src="../img/icons/cross_icon.png">';
        //if the window height is inf to 600, sidebar_phone overflow : scroll
        if(window.innerHeight < 600){
            //Matches window height with sidebar_phone height
            sidebar_phone_container.style.height = (window.innerHeight - sidebar_phone_burger_div.getBoundingClientRect().height) + 'px';
            //Set overflow scroll
            sidebar_phone_container.style.overflow = 'scroll';
        }
        //if window height > 600
        else{
            //Set sidebar_phone = max-content
            sidebar_phone_container.style.height = 'max-content';
        }
        //set low brightness when sidebar_phone is opened
        exit.forEach((elem)=>{
            elem.style.filter = "brightness(85%)";
            elem.style.pointerEvents = 'none';
        })
        //add properties to sidebar_phone during opening
        sidebar_phone_container.classList.add("sidebar_phone_container_added");
        sidebar_phone_burger.classList.add("sidebar_phone_burger_added");
        //Disable page scroll when sidebar_phone opened    
        document.querySelector('body').style.overflow = 'hidden';
    }
})

//Events during window resize
window.addEventListener('resize',()=>{
    const sidebar_phone_burger = document.getElementById('sidebar_phone_burger');
    const img = sidebar_phone_burger_div.querySelector('img');
    //When resizing window during opened sidebar_phone
    if(window.innerWidth > 900){
        //change cross img to burger img
        sidebar_phone_burger_div.innerHTML = '<img src="../img/icons/burger_icon.png">';
        const sidebar_phone_container = document.getElementById('sidebar_phone_container');
        //remove sidebar_phone properties
        sidebar_phone_burger.classList.remove("sidebar_phone_burger_added");
        sidebar_phone_container.classList.remove("sidebar_phone_container_added");
        //remove brightness filter of burger menu
        exit.forEach((elem)=>{
            elem.style.filter = "brightness(100%)";
            elem.style.pointerEvents = 'auto';
        })
        //set sidebar_phone height to 0
        sidebar_phone_container.style.height = '0px';
        //Allow scrolling for page
        document.querySelector('body').style.overflow = 'visible';
    }
})

