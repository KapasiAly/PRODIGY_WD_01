document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");

  // Change background color on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#555";
    } else {
      navbar.style.backgroundColor = "#333";
    }
  });

  // Change font color on hover
  var navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      this.style.color = '#ff9900'; // Change to the desired color
    });
    item.addEventListener('mouseout', function() {
      this.style.color = 'white'; // Reset to default color
    });
  });
});
