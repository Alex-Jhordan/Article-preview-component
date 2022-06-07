let shareIconContainers = document.querySelectorAll(".article__share-icon-container");
let articleInformation2 = document.querySelector(".article__information--2");

shareIconContainers.forEach(shareIconContainer => {
    shareIconContainer.addEventListener("click", function() {
        articleInformation2.classList.toggle("article__information--active");
    })
});