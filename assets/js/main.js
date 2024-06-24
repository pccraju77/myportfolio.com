//navbar function
(function() {

    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
  
          // Collapse the navbar on smaller screens
          const navCollapse = document.getElementById('navbarNav');
          if (window.getComputedStyle(navCollapse).display !== 'none') {
            const bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: false });
            bsCollapse.hide();
          }
  
          // Add a delay before scrolling to ensure the navbar has collapsed
          setTimeout(() => {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              const navbarHeight = document.querySelector('.navbar').offsetHeight;
              const extraOffset = window.innerWidth < 768 ? 100 : 50; // Adjust offset based on screen size
              const targetPosition = targetElement.offsetTop - navbarHeight - extraOffset;
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
            }
          }, 300); // 300 milliseconds delay
        });
      });
    });
  })();
  


  $(document).ready(function () {
    $(".progress").each(function () {
      var value = $(this).attr('data-value');
      var left = $(this).find('.progress-left .progress-bar');
      var right = $(this).find('.progress-right .progress-bar');
      if (value > 0) {
        if (value <= 50) {
          right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)');
        } else {
          right.css('transform', 'rotate(180deg)');
          left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)');
        }
      }
    });
  
    function percentageToDegrees(percentage) {
      return percentage / 100 * 360;
    }
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var navCollapse = document.querySelector('.navbar-collapse');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        var navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler.offsetParent !== null) { // Check if the toggler button is visible (i.e., on a small screen)
          navCollapse.classList.remove('show');
        }
      });
    });
  });
