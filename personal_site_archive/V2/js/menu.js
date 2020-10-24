//javascript for out interactive menu...
document.addEventListener("DOMContentLoaded", (event) => {
  function replaceLabel() {
    var theMenu = document.querySelector(".hmenu");
    var theActive = theMenu.querySelector("menuitem.active");
    var theLabel = theMenu.querySelector("span");
    theLabel.textContent = theActive.textContent;
  }

  replaceLabel();

  window.addEventListener("resize", function (event) {
    replaceLabel();
    var theMenus = document.querySelectorAll(".hmenu");
    theMenus.forEach(function (theMenu) {
      theMenu.classList.remove("open");
    });
  });

  //call me when the user clicks the document
  document.addEventListener("click", function (event) {
    if (event.target.matches(".hmenu span")) {
      event.target.closest(".hmenu").classList.toggle("open");
    } else if (event.target.matches(".hmenu a")) {
      // event.preventDefault();

      var theParent = event.target.parentNode;
      var theGParent = theParent.parentNode;

      //1. activate one menuitem

      var theSiblings = theGParent.querySelectorAll("menuitem");
      theSiblings.forEach(function (theChild) {
        theChild.classList.remove("active");
      });

      //2. close the menu
      theGParent.classList.toggle("open");

      //3. update the label text.
      // theParent.classList.add("active");
      // replaceLabel();
    }
  });
});