document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.consultation-form');
    const captchaSpan = form.querySelector('.captcha-value');
    const captchaInput = form.querySelector('input[placeholder="Captcha"]');
  
    // Generate a random 4-digit captcha on load
    function generateCaptcha() {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      captchaSpan.textContent = randomNum;
    }
  
    generateCaptcha();
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Basic form validation
      const name = form.querySelector('input[type="text"]').value.trim();
      const phone = form.querySelector('input[type="tel"]').value.trim();
      const captcha = captchaInput.value.trim();
      const checkbox = form.querySelector('input[type="checkbox"]').checked;
  
      if (!name) {
        alert('Please enter your name.');
        return;
      }
  
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }
  
      if (captcha !== captchaSpan.textContent) {
        alert('Captcha does not match. Please try again.');
        generateCaptcha();
        captchaInput.value = '';
        captchaInput.focus();
        return;
      }
  
      if (!checkbox) {
        alert('Please agree to the Terms and Privacy Policy.');
        return;
      }
  
      // If all good:
      alert('Thank you! Your free consultation is booked.');
      form.reset();
      generateCaptcha();
    });
  });