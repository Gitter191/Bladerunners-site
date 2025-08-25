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
    const response = await fetch("https://formspree.io/f/yourFormID", {
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
