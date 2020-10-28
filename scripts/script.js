// JavaScript Document
var leesArtikel = document.querySelector(".artikel_witterand_titelonderfoto");

leesArtikel.addEventListener("click", revealLink);

function revealLink() {
    leesArtikel.classList.add("toonLink");
}
