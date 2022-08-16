//----------------iniciando os conteúdos da accordeon list fechados-----------//
const resetMaxHeightAccordeon = document
  .querySelectorAll(".accordeon-content")
  .forEach((content) => (content.style.maxHeight = "0px"));
//---------------------------------------------------------------------------//

document.querySelectorAll(".accordeon-top").forEach((button) => {
  const content = button.nextElementSibling;
  function toogle() {
    content.classList.toggle("active");

    if (content.classList.contains("active")) {
      console.log("foi ativado");
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      console.log("foi desativado");
      content.style.maxHeight = "0px";
    }
  }
  button.addEventListener("click", toogle);
});
