function subscribe() {
  const email = document.getElementById("email").value;

  if (email === "") {
    alert("Please enter your email.");
  } else {
    alert("Thank you for subscribing! We'll notify you soon.");
    document.getElementById("email").value = "";
  }
}
