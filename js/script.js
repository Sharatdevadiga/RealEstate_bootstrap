const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Form submitted:", { name, email, message });
});
