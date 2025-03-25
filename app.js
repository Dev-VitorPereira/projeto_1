
var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 
    

    document.getElementById("buttonHTML").addEventListener("click", function() {
        window.open("./scr/HTML/html.html", "_blank"); // Abre em nova aba
    });
    document.getElementById("buttonCSS").addEventListener("click", function() {
        window.open("./scr/CSS/css.html", "_blank"); // Abre em nova aba
    });
    
    document.getElementById("buttonJavaScript").addEventListener("click", function() {
        window.open("./scr/JAVASCRIPT/javascript.html", "_blank"); // Abre em nova aba
    });
    
    document.getElementById("buttonJava").addEventListener("click", function() {
        window.open("./scr/JAVA/java.html", "_blank"); // Abre em nova aba
    });
    
    document.getElementById("buttonPython").addEventListener("click", function() {
        window.open("./scr/PYTHON/python.html", "_blank"); // Abre em nova aba
    });


let timeRunning = 5000 
let timeAutoNext = 10000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()