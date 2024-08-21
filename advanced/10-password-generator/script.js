document.getElementById("generate").addEventListener("click", function () {
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const password = generatePassword(
    length,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  document.getElementById("password").value = password;
});

document.getElementById("copy").addEventListener("click", function () {
  const password = document.getElementById("password");
  password.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});

function generatePassword(
  length,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let characters = lowercase;
  if (includeUppercase) characters += uppercase;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}
