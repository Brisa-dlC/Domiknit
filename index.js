//Animación del menú hamburguesa//
const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
    toggleButton.classList.toggle('close')
    navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
    if(e.target.id === 'nav'){
        navWrapper.classList.remove('show')
        toggleButton.classList.remove('close')
    }
})

//Posts subidos al html

class Post {
    constructor(img,text,alt){
        this.img = img;
        this.text = text;
        this.alt = alt
    }
}

let posts = [
    new Post (
        img = "Img/Fotos/Girasol.jpg",
        text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum, enim quis efficitur eleifend, turpis diam tempor odio, sit amet aliquet lorem justo sit amet justo",
        alt= "Girasol"),
    new Post (
        img = "Img/Fotos/Medusa.jpg",
        text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum, enim quis efficitur eleifend, turpis diam tempor odio, sit amet aliquet lorem justo sit amet justo",
        alt= "Medusa"),
    new Post (
        img = "Img/Fotos/Pulpo2.jpg",
        text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum, enim quis efficitur eleifend, turpis diam tempor odio, sit amet aliquet lorem justo sit amet justo",
        alt= "Pulpo"),
    new Post (
        img = "Img/Fotos/WinniePoohMini.jpg",
        text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum, enim quis efficitur eleifend, turpis diam tempor odio, sit amet aliquet lorem justo sit amet justo",
        alt= "WinniePooh"),
]
const contenedordepost = document.getElementById("Posts")

posts.forEach(element => {
    contenedordepost.innerHTML += `<div class="item">
        <img class="img" src="${element.img}" width="100%" alt="${element.alt}">
        <p>${element.text}</p>
        </div>`
    })
