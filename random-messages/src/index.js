const messages = [
  "Maria",
  "pocho",
  "ana",
  "rogers",
  "peggy",
  "sam",
  "wilson"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = { randomMsg };
