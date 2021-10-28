// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
let basePrice = 520
let discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
let fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

//template string literals
const recipient = "James";
const sender = "Per Harald Borgen"
// Break the email string into multiple lines
const email = `Hey ${recipient}! How is it going? Cheers ${sender}`;
console.log(email);
