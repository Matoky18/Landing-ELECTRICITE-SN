const ul = document.querySelector(".ul-slider-container")
const totalSliders = document.querySelectorAll(".ul-slider-container > li")



// cta bouton 
const ctabutton = document.querySelectorAll(".cta-button")
    const phoneNumber = "261375078812"
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

console.log(ctabutton,isMobile,navigator.userAgent)

ctabutton.forEach(cta => {

    cta.addEventListener("click",()=>{
    
    if (isMobile) {
        window.location.href = `tel:+${phoneNumber}`
    } else {
        window.location.href = `https://wa.me/${phoneNumber}?text=Bonjour`
    }


})
});


// cta bouton fin