//Accordion Function: Gets element by ID "accordion"
//then changes the display property from none to block

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//Theme function: Detects the time of day and sets theme
//depending on day or night.
$(function () {
  var hour = new Date().getHours();
  if (hour >= 19) {
    $(".wrapper").removeClass("light").addClass("dark");
    $("body").removeClass("light").addClass("dark");
    $("html").removeClass("light").addClass("dark");
  } else {
    $(".wrapper").removeClass("dark").addClass("light");
    $("body").removeClass("dark").addClass("light");
    $("html").removeClass("dark").addClass("light");
  }
});
