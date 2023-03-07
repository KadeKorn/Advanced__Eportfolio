let isModalOpen = false;
let contrastToggle = false;


function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme";
    }
    else {
        document.body.classList.remove("dark-theme")
    }

}


function contact(event) {
  event.preventDefault(); // this stops form from immediately refreshing the page
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_un844bj",
      "template_bjrp5fk",
      event.target,
      "uJjAf7G8kBbZURrbj"
    ).then(() => {
      //throw new Error("error") // <-- this is for testing out error feature
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contanct me directly at 'kadekorn@.com'"
        )
    });
}



function toggleModal(){
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
    // toggle modal
}
