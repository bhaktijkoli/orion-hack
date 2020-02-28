$("#navbar").hide();
(function() {
  particlesJS.load("backdrop", "/dist/js/particlesjs-config.json");
  ScrollReveal().reveal(".inro-text", { delay: 1500 });
  $(window).scroll(function(e) {
    if ($(this).scrollTop() > 400) {
      $("#navbar").slideDown(200);
    } else {
      $("#navbar").hide();
    }
  });

  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });

  $(".sponsor-logo-container").click(function() {
    window.open($(this).data("link"), "_blank");
  });

  let devfolioOptions = {
    buttonSelector: "#devfolio-apply-now",
    key: "orionhack"
  };

  if( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) ) {
    document
    .querySelector(devfolioOptions.buttonSelector)
    .addEventListener("click", function() {
      window.location.href =
      "https://devfolio.co/external-apply/" + devfolioOptions.key;
    });
  } else {    
    let script = document.createElement("script");
    script.src = "https://apply.devfolio.co";
    document.head.append(script);

    script.onload = function() {
        new Devfolio(devfolioOptions);
      };

      script.onerror = function() {
          document
            .querySelector(devfolioOptions.buttonSelector)
            .addEventListener("click", function() {
                window.location.href =
                  "https://devfolio.co/external-apply/" + devfolioOptions.key;
              });
          };
  }

})();

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
