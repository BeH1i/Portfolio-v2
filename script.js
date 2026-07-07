// وقتی روی دکمه کلیک شد، ایمیل نمایش داده بشه
const contactBtn = document.getElementById('contactBtn');
const emailText = document.getElementById('emailText');

contactBtn.addEventListener('click', () => {
  emailText.textContent = 'ایمیل من:shabkoohibehrad@email.com';
});