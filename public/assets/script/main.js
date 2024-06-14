const inicio = document.querySelector("#Inicio")
const nosotros = document.querySelector("#about-us")
const diseños =document.querySelector("#popular-designs")
const comentarios = document.querySelector("#testimonials")
const contactanos = document.querySelector("#site-footer")



comentarios.addEventListener("click", (c) =>{
    c.preventDefault();

    const sectionC = document.querySelector(".testimonials")
    sectionC.scrollIntoView({behavior : "smooth"})
})


contactanos.addEventListener("click", (co) =>{
    co.preventDefault();

    const sectionCO = document.querySelector(".site-footer")
    sectionCO.scrollIntoView({behavior : "smooth"})
})




inicio.addEventListener("click",(i) =>{
    i.preventDefault();

    const sectionI = document.querySelector(".Inicio");
    sectionI.scrollIntoView({behavior: "smooth"});
})


nosotros.addEventListener("click", (n) =>{
    n.preventDefault();

    const sectionN = document.querySelector(".about-us")
    sectionN.scrollIntoView({behavior : "smooth"})
})


diseños.addEventListener("click", (d) =>{
    d.preventDefault();

    const sectionD = document.querySelector(".popular-designs")
    sectionD.scrollIntoView({behavior : "smooth"})
})