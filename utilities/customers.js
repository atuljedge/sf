const { v4: uuidv4 } = require("uuid");
const customers = [
  {
    name: "Atul Jedge",
    accNo: uuidv4(),
    email: "atuljedge2801@gmail.com",
    currentBal: 5000000,
  },
  {
    name: "Kedar jadhav",
    accNo: uuidv4(),
    email: "kedar.jadhav@gmail.org",
    currentBal: 45000,
  },
];

module.exports = customers;