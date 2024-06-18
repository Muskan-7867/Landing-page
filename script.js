// Function to show the sidebar
function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

// Function to hide the sidebar
function hidesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// Fetch and load the navbar content
const nav = document.querySelector('.navbar');
fetch('/navbar.html')
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data;
    })
    .catch(error => console.error('Error fetching navbar:', error));



// Event listener to hide background image on login button click
document.getElementById('loginButton').addEventListener('click', function() {
    document.body.classList.add('hidden-background');
});

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");
    document.body.classList.add('hidden-background');
});
//for scroll
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = 'white'; 
      navbar.querySelectorAll('a').forEach(function(link) {
        link.style.color = 'black';
    });
      // Change to white when scrolled
    } else {
      navbar.style.backgroundColor = 'black';
      navbar.querySelectorAll('a').forEach(function(link) {
        link.style.color = 'white';
      });
       // Change to blue when at the top
    }
  });

  document.getElementById('loginButton').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var error = document.getElementById('error');
    if (username === '' || password === '') {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        // Handle login logic here
        alert('Logged in successfully');
    }
});

document.getElementById('togglePassword').addEventListener('click', function () {
    var passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

const themeToggleBtn = document.getElementById("themeToggle");

themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});




