let userInput = document.getElementById("username");
let password = document.getElementById("password");
let submit = document.getElementById("submit");

let CUSN = "admin";
let CPAS = "1234";

submit.addEventListener("click", function(e) {
  e.preventDefault();

if (userInput.value === CUSN && password.value === CPAS) {
  alert('selamat! kamu sudah tau password nya, kirim "anjay" ke ferry');
} else {
  alert('password salah');
}
});