const ul = document.querySelector(".ul-slider-container")
const totalSliders = document.querySelectorAll(".ul-slider-container > li")



// cta bouton 
const ctabutton = document.querySelectorAll(".cta-button")
    const phoneNumber = "261375078812"
const isMobile = window.matchMedia("(max-width: 768px").matches;

console.log(ctabutton,isMobile,navigator.userAgent,window.innerWidth)

ctabutton.forEach(cta => {

    cta.addEventListener("click",()=>{
    
    if (isMobile) {
        window.location.href = `tel:+${phoneNumber}`
    } else {
        window.open(`https://wa.me/${phoneNumber}?text=Bonjour`);
        console.log("desktop")
    }


})
});


// cta bouton fin

const contactezNous = document.getElementById("contactez-nous")
console.log(contactezNous)

contactezNous.addEventListener("click",()=>{
    console.log("clicked")
    document.getElementById("footer").scrollIntoView({behavior: "smooth"})

})