function validate() {
    let input = document.getElementById("email");
    input.addEventListener("click", onTarger);

    function onTarger(event){
      let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      let email = event.target.value;
      if(emailPattern.test(email)){
        event.target.classList.remove("error")
      }
      else{
        event.target.classList.add("error")
      }

    }
}