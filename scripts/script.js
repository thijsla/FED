// JavaScript Document
var leesArtikel = document.querySelector(".artikel_witterand_titelonderfoto");
var artikelLink = document.querySelector(".verborgenLink");

leesArtikel.addEventListener("click", revealLink);

function revealLink() {
    artikelLink.classList.toggle("verborgenLink");
}
