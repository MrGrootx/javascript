// Entering the userName and PassWord
const input = "abishek";
const inputPassword = "1234";

// removing the extra space  if space have [Left & Right]
const inputvalue = input.trim();
const inputPasswordtrim = inputPassword.trim();

// checking if have any Caps Letter
const checkcaps = inputvalue.toLowerCase();
const checkpasscaps = inputPasswordtrim.toLowerCase();

//  Stored UserName & Password For Admin
const userDetails = {
  user: "abishek",
  pass: "1234",
};

if (checkcaps == userDetails.user && checkpasscaps == userDetails.pass) {
  const msg = `Welcome back ${checkcaps}`;
  console.log(msg);
} else {
  console.warn("You Are Not Authorized  to Enter ");
}
