  // Initialize EmailJS
  (function(){
    emailjs.init("SEQsTGL8uZfzGOnzI"); // Replace with your EmailJS user ID
})();

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    emailjs.sendForm('service_x5dxeok', 'template_bl3vecn', this)
        .then(function() {
            alert('Quote sent successfully. Our customer care Representative will attend to you shortly via your email address Thanks!!!');
        }, function(error) {
            alert('Failed to send message. Error: ' + JSON.stringify(error));
        });
});