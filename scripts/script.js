// JavaScript Document
var leesArtikel = document.getElementsByClassName("artikel_witterand_titelonderfoto");

leesArtikel.addEventListener("click", revealLink);

function revealLink() {
    leesArtikel.classList.add("artikelLezen");
}
