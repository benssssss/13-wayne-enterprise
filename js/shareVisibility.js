var shareButtonOn = document.querySelector("#shareButton");
var boxOverlay = document.querySelector("#shareOverlayBox");
var shareButtonOff = document.querySelector("#shareButtonOff");

shareButton.addEventListener("click", function () {
    boxOverlay.style.display = "block";
});

shareButtonOff.addEventListener("click", function () {
    boxOverlay.style.display = "none";
});