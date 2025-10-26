if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

// Get the button
const backToTopButton = document.getElementById("back-to-top");

// Show button when scrolling down 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Smooth scroll to top when clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

