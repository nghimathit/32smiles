const loginBtn = document.getElementById('loginTitle');
const signupBtn = document.getElementById('signupTitle');
const usernameElement = document.getElementById('username');
const loginLink = document.getElementById('loginLink');
const logoutLink = document.getElementById('logoutLink');

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

loginLink.addEventListener('click', function() {
  openPopup();
});

logoutLink.addEventListener('click', function() {
  logout();
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

document.getElementById('signupButton').addEventListener('click', function(e) {
  e.preventDefault();
  signUp();
});

function signUp() {
  var name = document.getElementById('nameInput').value;
  var email = document.getElementById('emailInput').value;
  var password = document.getElementById('passwordInput').value;

  // Kiểm tra xem đã nhập đủ thông tin chưa
  if (name && email && password) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var newUser = {
      name: name,
      email: email,
      password: password
    };

    // Kiểm tra xem email đã tồn tại hay chưa
    var existingUser = users.find(function(user) {
      return user.email === email;
    });

    if (existingUser) {
      alert('Email already exists. Please choose a different email.');
      return;
    }
<<<<<<< HEAD

    // Thêm người dùng mới vào danh sách
    users.push(newUser);

    // Lưu danh sách người dùng vào local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Xoá các input sau khi đăng ký thành công
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
	document.getElementById('passwordInput').value = '';

    alert('Sign Up Success! Please log in.');

=======

    // Thêm người dùng mới vào danh sách
    users.push(newUser);

    // Lưu danh sách người dùng vào local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Xoá các input sau khi đăng ký thành công
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('passwordInput').value = '';

    alert('Sign Up Success! Please log in.');

>>>>>>> e3118661f3ec680056ead4e46312e2a90c1dd4c8
    // Hiển thị form đăng nhập
    showLoginForm();
  } else {
    alert('Please enter full information.');
  }
}

document.getElementById('loginButton').addEventListener('click', function(e) {
  e.preventDefault();
  logIn();
});

function logIn() {
  var email = document.getElementById('loginEmailInput').value;
  var password = document.getElementById('loginPasswordInput').value;

  // Kiểm tra xem đã nhập đủ thông tin chưa
  if (email && password) {
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra xem thông tin đăng nhập có chính xác hay không
    var user = users.find(function(user) {
      return user.email === email && user.password === password;
    });

    if (user) {
      alert('Logged in successfully!');
      setUsername(user.name);
      toggleLoginLogout(true);
      closePopup();
      // Lưu thông tin người dùng đã đăng nhập vào localStorage
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      // Thực hiện các hành động sau khi đăng nhập thành công
    } else {
      alert('Email or password is incorrect.');
    }
  } else {
    alert('Please enter full information.');
  }
}

function setUsername(name) {
  usernameElement.textContent = name;
}

function toggleLoginLogout(isLoggedIn) {
  if (isLoggedIn) {
    loginLink.style.display = 'none';
    logoutLink.style.display = 'inline-block';
  } else {
    loginLink.style.display = 'inline-block';
    logoutLink.style.display = 'none';
  }
}

function logout() {
  localStorage.removeItem('loggedInUser');
  setUsername('');
  toggleLoginLogout(false);
  showLoginForm();
}

function showLoginForm() {
  let parent = loginBtn.parentNode.parentNode;
  Array.from(parent.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add('slide-up')
    } else {
      signupBtn.parentNode.classList.add('slide-up')
      parent.classList.remove('slide-up')
    }
  });
}

// Kiểm tra xem người dùng đã đăng nhập hay chưa khi tải trang
document.addEventListener('DOMContentLoaded', function() {
  var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (loggedInUser) {
    setUsername(loggedInUser.name);
    toggleLoginLogout(true);
  } else {
    toggleLoginLogout(false);
  }
});