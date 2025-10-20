document.getElementById('y').textContent = new Date().getFullYear();

// Language toggle

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  alert('Language switched to ' + (lang === 'ar' ? 'Arabic' : 'English') + '. (Demo only)');
}
