function upDate(previewPic) {
    console.log("Наведение или фокус сработали");

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    console.log("Уход мыши или потеря фокуса");

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "none";
    imageDiv.textContent = "Наведите курсор или используйте Tab";
}

function addTabFocus() {
    console.log("Страница загружена, tabindex добавляется");

    let images = document.querySelectorAll("#gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
