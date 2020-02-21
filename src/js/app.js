$('#navbar').hide();
(function() {
  Particles('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  ScrollReveal().reveal('.inro-text', {delay: 1500});
  $(window).scroll(function(e) {
    if($(this).scrollTop() > 400) {
      $('#navbar').slideDown(200);
    } else {
      $('#navbar').hide();
    }
  });

  $("a").on('click', function(event) {
   if (this.hash !== "") {
     event.preventDefault();
     var hash = this.hash;
     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 800, function(){
       window.location.hash = hash;
     });
   }
 });

})()

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
