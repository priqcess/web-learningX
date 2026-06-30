function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === '12345') {
      window.location.href = 'home.html';
      return false;
  } else {
      alert('Incorrect username or password');
      return false;
  }
}

function logout() {
  window.location.href = 'index.html';
}