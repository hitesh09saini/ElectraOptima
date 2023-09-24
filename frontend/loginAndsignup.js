function signup() {
  try {
    // const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const pass = document.getElementById('pass').value;

    localStorage.setItem(name, pass);
    console.log("Sign up successful! You can now log in.");
    location.href = 'login.html';
  } catch (error) {
    console.error("An error occurred during sign up:", error);
  }
}

function login() {
  try {
    const name = document.getElementById('name').value;
    const pass = document.getElementById('pass').value;

    if (localStorage.getItem(name) === pass) {
      console.log("Login successful!");
      location.href = 'unitConvertor.html';
    } else {
      console.log("Login failed. Check your credentials.");
    }
  } catch (error) {
    console.error("An error occurred during login:", error);
  }
}

const otpbox = document.getElementById('otp-box');

function otp() {
  otpbox.style.display = 'flex';
}

function sendotp() {
  try {
    document.body.style.display = 'none';
  } catch (error) {
    console.error("An error occurred while sending OTP:", error);
  }
}

document.getElementById('close').addEventListener('click', () => {
  try {
    otpbox.style.display = 'none';
  } catch (error) {
    console.error("An error occurred while closing the OTP box:", error);
  }
});
