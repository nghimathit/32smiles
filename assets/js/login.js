console.clear();

const loginBtn = document.getElementById('loginTitle');
const signupBtn = document.getElementById('signupTitle');

loginBtn.addEventListener('click', (e) => {
  let parent = e.target.parentNode.parentNode;
  Array.from(e.target.parentNode.parentNode.classList).find((element) => {
	if (element !== "slide-up") {
	  parent.classList.add('slide-up')
	} else {
	  signupBtn.parentNode.classList.add('slide-up')
	  parent.classList.remove('slide-up')
	}
  });
});

signupBtn.addEventListener('click', (e) => {
  let parent = e.target.parentNode;
  Array.from(e.target.parentNode.classList).find((element) => {
	if (element !== "slide-up") {
	  parent.classList.add('slide-up')
	} else {
	  loginBtn.parentNode.parentNode.classList.add('slide-up')
	  parent.classList.remove('slide-up')
	}
  });
});

document.getElementById('loginLink').addEventListener('click', function() {
  openPopup();
});

function openPopup() {
  var popup = document.querySelector('.popup');
  var overlay = document.querySelector('.overlay');
  popup.style.display = 'flex';
  overlay.style.display = 'block';
}

function closePopup() {
  var popup = document.querySelector('.popup');
  var overlay = document.querySelector('.overlay');
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

// Lắng nghe sự kiện khi chuột di chuyển ra khỏi overlay
document.querySelector('.overlay').addEventListener('click', function(event) {
  if (event.target.classList.contains('overlay')) {
	closePopup();
  }
});

document.getElementById('signupButton').addEventListener('click', function() {
  signUp();
});

function signUp() {
  var name = document.getElementById('nameInput').value;
  var email = document.getElementById('emailInput').value;
  var password = document.getElementById('passwordInput').value;

  // Kiểm tra xem đã nhập đủ thông tin chưa
  if (name && email && password) {
	var user = {
	  name: name,
	  email: email,
	  password: password
	};

	// Lưu thông tin người dùng vào local storage
	localStorage.setItem('user', JSON.stringify(user));

	// Xoá các input sau khi đăng ký thành công
	document.getElementById('nameInput').value = '';
	document.getElementById('emailInput').value = '';
	document.getElementById('passwordInput').value = '';

	alert('Sign Up Success! Please log in.');

	// Hiển thị form đăng nhập
	showLoginForm();
  } else {
	alert('Please enter full information.');
  }
}

document.getElementById('loginButton').addEventListener('click', function() {
  logIn();
});

function logIn() {
  var email = document.getElementById('loginEmailInput').value;
  var password = document.getElementById('loginPasswordInput').value;

  // Kiểm tra xem đã nhập đủ thông tin chưa
  if (email && password) {
	var user = JSON.parse(localStorage.getItem('user'));

	// Kiểm tra xem thông tin đăng nhập có chính xác hay không
	if (user && user.email === email && user.password === password) {
	  alert('Logged in successfully!');
	  closePopup();
	  // Thực hiện các hành động sau khi đăng nhập thành công
	} else {
	  alert('Email or password is incorrect.');
	}
  } else {
	alert('Please enter full information.');
  }
}