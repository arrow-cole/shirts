document.getElementById('enter-store-button').addEventListener('click', function() {
  document.getElementById('coming-soon').classList.add('hidden');
  document.getElementById('password-page').classList.remove('hidden');
});

document.getElementById('submit-password-button').addEventListener('click', function() {
  var password = document.getElementById('password-input').value;
  if (password === 'westgate') { // Replace 'your_password_here' with the actual password
      window.location.href = 'FRONTEND/store.html';
  } else {
      document.getElementById('error-message').classList.remove('hidden');
  }
});
