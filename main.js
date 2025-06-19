// function createOrder() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Step 1: Order created");
//       resolve("Order ID: 123");
//     }, 1000);
//   });
// }

// function processPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(Step 2: Payment processed for ${orderId});
//       resolve("Payment ID: 456");
//     }, 1000);
//   });
// }

// function deliverOrder(paymentId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(Step 3: Order delivered using ${paymentId});
//       resolve("Delivery confirmed");
//     }, 1000);
//   });
// }

// // Chaining the promises
// createOrder()
//   .then(orderId => processPayment(orderId))
//   .then(paymentId => deliverOrder(paymentId))
//   .then(result => console.log(result))
//   .catch(error => console.error("Error:", error))





function getUserById(id) {
  return Promise.resolve({ id, name: "Aarav", pan: "ABCDE1234F" });
}

function getCreditScore(pan) {
  return Promise.resolve({ score: 740 });
}

function checkLoanEligibility(score) {
  return Promise.resolve(score >= 700 ? "Eligible" : "Not Eligible");
}

// Chained Promise solution
getUserById(101)
  .then(user => {
    console.log("User fetched:", user);
    return getCreditScore(user.pan);
  })
  .then(credit => {
    console.log("Credit Score:", credit.score);
    return checkLoanEligibility(credit.score);
  })
  .then(result => {
    console.log("Loan Eligibility:", result);
  })
  .catch(err => {
    console.error("Something went wrong:", err);
  });