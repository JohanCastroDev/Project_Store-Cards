function openTab(evt, tabName) {
    var i, tabContent, tabButtons;

    // Oculta todos los contenidos de las pestañas
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Quita la clase "active" de todos los botones de pestaña
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    // Muestra el contenido de la pestaña seleccionada y añade la clase "active" al botón correspondiente
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Configura la primera pestaña como la visible al cargar la página
document.getElementById("tab1").style.display = "block";
