const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

document.getElementById("contact-link").addEventListener("click", function() {
  const contactForm = document.getElementById("contact-form-wrapper");
  
 
  if (contactForm.style.display === "none" || contactForm.style.display === "") {
    contactForm.style.display = "block";
  } else {
    contactForm.style.display = "none";
  }
});


function validateName(name) {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
}


function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

       
        const contactLink = document.getElementById('contact-link');
        const contactFormWrapper = document.getElementById('contact-form-wrapper');
        const mainContent = document.querySelector('.main-content');

        contactLink.addEventListener('click', () => {
            contactFormWrapper.style.display = 'flex';
            mainContent.classList.add('blur');
        });

        
        contactFormWrapper.addEventListener('click', (e) => {
            if (e.target === contactFormWrapper) {
                contactFormWrapper.style.display = 'none';
                mainContent.classList.remove('blur');
            }
        });
        document.getElementById('contactForm').addEventListener('submit', function(event) {
          event.preventDefault();
          
          const name = document.getElementById('name').value.trim();
          const email = document.getElementById('email').value.trim();
          const message = document.getElementById('message').value.trim();
          const formError = document.getElementById('formError');
        
          if (!validateName(name)) {
            formError.textContent = "Please enter a valid name.";
            formError.style.display = "block";
            return;
          }
        
          if (!validateEmail(email)) {
            formError.textContent = "Please enter a valid email address.";
            formError.style.display = "block";
            return;
          }
        
          if (message === "") {
            formError.textContent = "Please enter a message.";
            formError.style.display = "block";
            return;
          }
        
          formError.style.display = "none";
          alert("Form submitted successfully!");
          // Submit the form or do whatever you need here
        });
        
        // Name validation (only letters allowed)
        function validateName(name) {
          const nameRegex = /^[a-zA-Z\s]+$/;
          return nameRegex.test(name);
        }
        
        // Email validation (basic format)
        function validateEmail(email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        }
        
        
