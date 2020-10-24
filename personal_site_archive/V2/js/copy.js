
new ClipboardJS(".btn");

function ShowSecond() {
  var modal = document.getElementById("modal-notif");
  modal.className = "show";
  setTimeout(function () {
    modal.className = "hide";
  }, 2000);
}