function notify(message) {
 let divContent = document.getElementById("notification");
  divContent.innerHTML = message;
  divContent.style.display = "block";
  divContent.addEventListener("click", toggleDisplay)

  function toggleDisplay(event){
    event.target.style.display = "none"
  }
}