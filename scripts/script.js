// JavaScript Document
var leesArtikel = document.querySelector(".artikel_witterand_titelonderfoto");
var Link = document.querySelector("#verborgenLink");

leesArtikel.addEventListener("click", revealLink);

function revealLink() {
    leesArtikel.classList.remove("verborgenLink");
}
