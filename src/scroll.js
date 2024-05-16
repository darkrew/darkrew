document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navLinks a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1); // Remove the # symbol
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Scroll to the target section
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });

        // Add a class to the clicked link
        navLinks.forEach(function (navLink) {
          navLink.classList.remove("active"); // Remove active class from all links
        });
        link.classList.add("active"); // Add active class to the clicked link
      }
    });
  });
});