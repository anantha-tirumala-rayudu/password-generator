function generatePassword() {
  const length = document.getElementById("length").value;
  const upper = document.getElementById("upper").checked;
  const lower = document.getElementById("lower").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked;

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}<>?/";

  let allChars = "";
  if (upper) allChars += upperChars;
  if (lower) allChars += lowerChars;
  if (number) allChars += numberChars;
  if (symbol) allChars += symbolChars;

  if (allChars === "") {
    alert("Please select at least one option.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  document.getElementById("output").value = password;
}

function copyPassword() {
  const output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
