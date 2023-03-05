// template id "template_bjrp5fk"
// service id "service_un844bj"
// public key "uJjAf7G8kBbZURrbj"

function contact(event) {
  event.preventDefault(); // this stops form from immediately refreshing the page
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  emailjs
    .sendForm(
      "service_un844bj",
      "template_bjrp5fk",
      event.target,
      "uJjAf7G8kBbZURrbj"
    ).then(() => {
        throw new Error("error") // <-- this is for testing out error feature
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contanct me directly at 'kadekorn@.com'"
        )
    });
  loading.classList += " modal__overlay--visible";
  setTimeout(() => {
    console.log("it worked 1");
  }, 1000);
}

console.log("test");
