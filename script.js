/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

function signUpForm(e){
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var user = {
    username : username,
    email : email,
    password : password,
  }

  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("Đăng ký thành công")
}

function signInForm(e){
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if(user == null){
    alert ("Không tìm thấy user")
  }else if(username == data.username && password == data.password){
    alert("Đăng Nhập Thành Công")
    window.location.href="homepage.html"
  }else{
    alert("Đăng Nhập Thất Bại")
  }
}

// Thêm hàm registerUser
function registerUser(event) {
  event.preventDefault(); // Ngăn chặn gửi form

  // Thực hiện xử lý đăng ký tại đây (kiểm tra thông tin, gửi đến server, v.v.)
  // Sau khi đăng ký thành công, chuyển sang phần quiz
  showQuiz();
}

// Thêm hàm showQuiz
function showQuiz() {
  const signUpForm = document.getElementById('signUpForm');
  const signInForm = document.getElementById('signInForm');
  const quizContainer = document.getElementById('quizContainer');

  // Ẩn form đăng ký và đăng nhập
  signUpForm.style.display = 'none';
  signInForm.style.display = 'none';

  // Hiển thị phần trắc nghiệm
  quizContainer.style.display = 'block';

  // Khởi động câu hỏi đầu tiên
  showQuestion();
}


function registerUser(event) {
    event.preventDefault(); // Ngăn chặn gửi form

    // Thực hiện xử lý đăng ký tại đây (kiểm tra thông tin, gửi đến server, v.v.)
    // Sau khi đăng ký thành công, chuyển hướng đến trang quiz
    window.location.href = 'quiz.html'; // Chuyển đến trang quiz
}