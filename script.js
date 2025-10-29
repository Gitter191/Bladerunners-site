const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  formStatus.innerText = "Versturen...";

  try {
    const response = await fetch("https://formspree.io/f/meolqlgg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    if (response.ok) {
      formStatus.innerText = "Thank you! Your message has been sent.";
      form.reset();
    } else {
      formStatus.innerText = "Something went wrong, please try again.";
    }
  } catch (error) {
    formStatus.innerText = "Connection error, please try again later.";
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}