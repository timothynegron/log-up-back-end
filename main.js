// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!

const user1 = "colin.jaffe@codeimmersives.com";
const password1 = "Hotforhimself";
const user2 = "mesuara@codeimmersives.com";
const password2 = "Console.logger";
const user3 = "anthony@codeimmersives.com";
const password3 = "like a BOSS";

// **YOUR** code below. Pass those tests!

function isValidEmail(email) {
  return email[0] !== "@" &&
    email.slice(email.indexOf("@"), email.length) === "@codeimmersives.com"
    ? true
    : false;
}

function isValidPassword(password) {
  return password.length > 7 &&
    password.toUpperCase() != password &&
    password.toLowerCase() != password
    ? true
    : false;
}

function isRegisteredUser(user) {
  return user1 === user || user2 === user || user3 === user ? true : false;
}

function passwordMatches(email, password) {
  return (user1 === email && password1 === password) ||
    (user2 === email && password2 === password) ||
    (user3 === email && password3 === password)
    ? true
    : false;
}

// Our code below. Do not touch!

if (typeof isValidEmail === "undefined") {
  isValidEmail = undefined;
}

if (typeof isValidPassword === "undefined") {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === "undefined") {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === "undefined") {
  passwordMatches = undefined;
}

if (typeof user1 === "undefined") {
  user1 = undefined;
}

if (typeof user2 === "undefined") {
  user2 = undefined;
}

if (typeof user3 === "undefined") {
  user3 = undefined;
}

if (typeof password1 === "undefined") {
  password1 = undefined;
}

if (typeof password2 === "undefined") {
  password2 = undefined;
}

if (typeof password3 === "undefined") {
  password3 = undefined;
}

module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3,
};
