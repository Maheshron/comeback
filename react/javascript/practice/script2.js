const cart = ["shoes","pants","kurtas"];

const GITHUB_API = 'https://api.github.com/users/Maheshron';

const user = fetch(GITHUB_API);
console.log(user);


createOrder(cart)
.then(function(orderId){
  return  proceedToPayment(orderId)
})
.then(function(paymentInfo){
  return  showOdersummary(paymentInfo)
})
.then(function(paymentInfo){
    return    updateWallet(paymentInfo) 
});