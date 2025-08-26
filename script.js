// =======================
// Contact formulier
// =======================
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  formStatus.innerText = "Versturen...";

  try {
    // Hier moet je een echte mailservice of backend koppelen.
    // Bijvoorbeeld via Formspree of een eigen server.
    const response = await fetch("https://formspree.io/f/meolqlgg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    if (response.ok) {
      formStatus.innerText = "Bedankt! Je bericht is verstuurd.";
      form.reset();
    } else {
      formStatus.innerText = "Er ging iets mis, probeer opnieuw.";
    }
  } catch (error) {
    formStatus.innerText = "Verbindingsfout, probeer later opnieuw.";
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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}