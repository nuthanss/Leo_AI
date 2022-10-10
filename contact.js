function sendEmail() {
  
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "",
//     Password : "A933DFF92B7DE02E9666FE68E060E2AC3C97",
//     To : '',
//     From : "",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );

console.log();
Email.send({
  SecureToken : "a02d981a-d89f-420b-91a5-ef9963749154",
  To : '',
  From : "",
  Subject : "This is the subject",
  Body : "And this is the body"
}).then(
message => alert(message)
);
}