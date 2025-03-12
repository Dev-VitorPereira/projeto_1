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


let isDark = false; // Variável para verificar o estado do tema

document.getElementById("btn1").addEventListener("click", function() {
    if (isDark) {
        document.body.style.backgroundColor = ""; 
        document.getElementById("btn1").textContent = "Modo Escuro"; // Altera o texto do botão
    } else {
        document.body.style.backgroundColor = "black"; // Cor escura
        document.getElementById("btn1").textContent = "Modo Claro"; // Altera o texto do botão
    }
    isDark = !isDark; // Alterna o estado
});
