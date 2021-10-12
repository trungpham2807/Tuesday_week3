const order = {
    orderItems: [
    { id: "M40", item: "T-shirt", price: 29.9, quantity: 5, gender: 'm', category: 'Summer' },
    { id: "M32", item: "Hoodie", price: 99.9, quantity: 2, gender: 'm', category: 'Winter' },
    { id: "M11", item: "Sandals", price: 19.9, quantity: 1, gender: 'm', category: 'Summer' },
    { id: "M12", item: "Shorts", price: 29.9, quantity: 1, gender: 'm', category: 'Summer' },
    { id: "M13", item: "Exercise Shorts", price: 29.9, quantity: 5, gender: 'm', category: 'Exercise' },
    { id: "M41", item: "Shoes", price: 19.9, quantity: 1, gender: 'm', category: 'Summer' },
    { id: "M49", item: "Socks", price: 5.9, quantity: 10, gender: 'm', category: 'Undergarment' },
    { id: "M01", item: "Belt", price: 15.9, quantity: 1, gender: 'm', category: 'Accessory' },
    { id: "M42", item: "Underwear", price: 19.9, quantity: 10, gender: 'm', category: 'Undergarment' },
    { id: "F71", item: "T-shirt", price: 39.9, quantity: 5, gender: 'f', category: 'Summer' },
    { id: "F81", item: "Dress", price: 49.9, quantity: 5, gender: 'f', category: 'Summer' },
    { id: "F91", item: "Skirt", price: 39.9, quantity: 5, gender: 'f', category: 'Summer' },
    { id: "F01", item: "Shoes", price: 19.9, quantity: 10, gender: 'f', category: 'Summer' },
    { id: "F32", item: "Hoodie", price: 99.9, quantity: 2, gender: 'f', category: 'Winter' },
    { id: "F34", item: "Sandals", price: 19.9, quantity: 2, gender: 'f', category: 'Summer' },
    { id: "F36", item: "Shorts", price: 39.9, quantity: 3, gender: 'f', category: 'Summer' },
    { id: "F12", item: "Exercise Shorts", price: 29.9, quantity: 5, gender: 'f', category: 'Exercise' },
    { id: "F19", item: "Sleeping", price: 39.9, quantity: 3, gender: 'f', category: 'Undergarment' },
    { id: "F42", item: "Socks", price: 5.9, quantity: 10, gender: 'f', category: 'Undergarment' },
    { id: "F43", item: "Underwear", price: 39.9, quantity: 10, gender: 'f', category: 'Undergarment' },
    { id: "F44", item: "Bra", price: 29.9, quantity: 10, gender: 'f', category: 'Undergarment' },
    { id: "F01", item: "Belt", price: 15.9, quantity: 1, gender: 'f', category: 'Accessory' },
  ]
  };

// Define a function that returns the sum number of items in the order.
const sumNumberItems = () => {
    console.log("Sum number items", order.orderItems.length)
    // let allItems = [];
    // order.orderItems.forEach(item => allItems.push(item.item));
    // console.log(allItems);
}
sumNumberItems();
// Define a function that returns the total number of unique items in the order.
const totalNumberItems = () => {
    let allItems = [];
    order.orderItems.forEach(item => allItems.push(item.item));
    let x = allItems.sort(); //sort item (include duplicate item)
    let allItemsNew = [x[0]]; //assign new array
    for(let i= 1; i < x.length; i++){
        if(x[i]!== x[i-1]){ //Compare 2 value besign, if not equal -> push, if equal -> dont push
            allItemsNew.push(x[i]);
        }
    }
    console.log("unique item", allItemsNew.length);
}
totalNumberItems();
// Define a function that returns the number of male items in the order.
const numberMale = () => {
        const sum = order.orderItems.reduce((total, e) => { 
            return total + (e.gender === 'm');
        },0) //0 -> initialize value accumulator: total = 0
        console.log("Total Number male items:", sum);
}
numberMale();
// Define a function that returns the number of female items in the order.
const numberFemale = () => {
    const sum = order.orderItems.reduce((total, e) => { 
        return total + (e.gender === 'f');
    },0) //0 -> initialize value accumulator: total = 0
    console.log("Total Number female items:", sum);
}
numberFemale();
// Define a function that returns the number of summer items in the order.
const numberSummerItems = () => {
    const sum = order.orderItems.reduce((total, e) => { 
        return total + (e.category === 'Summer');
    },0) //0 -> initialize value accumulator: total = 0
    console.log("Total Number Summmer items:", sum);
}
numberSummerItems();
// Define a function that returns the number of under garment items in the order.
const undergarmentItems = () => {
    const sum = order.orderItems.reduce((total, e) => { 
        return total + (e.category === 'Undergarment');
    },0) //0 -> initialize value accumulator: total = 0
    console.log("Total Number Undergarment items:", sum);
}
undergarmentItems();
// Define a function that returns the number of female under garment items in the order.
const femaleUndergarment = () => {
    const sum = order.orderItems.reduce((total, e) => { 
        return total + (e.category === 'Undergarment' && e.gender ==='f');
    },0) //0 -> initialize value accumulator: total = 0
    console.log("Total Number Female Undergarment items:", sum);
}
femaleUndergarment();
// Define a function that returns the sum of all the unique items summer in the order.
const sumUniqueSummer = () => {
//         order.orderItems.filter(value => {
//             if (value.category === 'Summer') {
//                 var x = value.item.filter((value, index, self) => {
//                     return self.indexOf(value) === index
//                 })
//             }
//     })
}
// let x;
// if(order.orderItems.category === "Summer"){
//      x = order.orderItems.map(item => item.item)
//     .filter((value, index, self) => self.indexOf(value) === index)
// }
// console.log("x",x)
sumUniqueSummer();

// Define a function that returns the sum of all the summer items in the order.


const sumSummer = () => {
    const sum = order.orderItems.reduce((total, e) => { 
        return total + (e.price) * (e.quantity) * (e.category === 'Summer');
    },0) 
    console.log("Sum all summer:",sum)
}
sumSummer();
// Define a function that returns the sum of all the unique items male in the order.
const sumUniqueMale = () => {

}
sumUniqueMale();
// Define a function that returns the sum of all the male items in the order.
const sumMale = () => {
    const sum = order.orderItems.reduce((total, e) => { 
        return total + (e.price) * (e.quantity) * (e.gender === 'm');
    },0) 
    console.log("Sum all male:",sum)

}
sumMale();
// Define a function that returns the sum of all the unique items female in the order.
    
const sumUniqueFemale = () => {

}
sumUniqueFemale();
// Define a function that returns the sum of all the female items in the cart.
const sumFemale = () => {
    const sum = order.orderItems.reduce((total, e) => { 
        return total + (e.price) * (e.quantity) * (e.gender === 'f');
    },0) 
    console.log("Sum all female:",sum)
}
sumFemale();
// Define a function that mutates the object, adding an originalDate property as the current date.
const originalDate = () => {
    var today = new Date();
    var getToday = today.getFullYear();
    order.orderItems.forEach(item => item.currentDate = getToday);
    // order.orderItems.currentDate = getToday;
    console.log(order);
}
originalDate();

// Define a function that mutates the object, adding a delivered property as false.
const deliveredItem = () => {
    order.orderItems.forEach(item => item.delivered = false);
    console.log(order);
}
deliveredItem();

// Define a function that mutates the object, adding subtotal property, the sum of all the items in the order.
const subTotalItems = () => {
    order.orderItems.forEach(item => item.subTotal = item.quantity * item.price);
    console.log(order);
}
subTotalItems();
// Define a function that mutates the object, adding a salesTax property calculated at .07 percent * subtotal.
const salesTaxItems = () => {
    order.orderItems.forEach(item => item.salesTax = item.quantity * item.price * 0.07 )
    console.log(order);
}
salesTaxItems();
// Define a function that mutates the object, adding grandTotal property, the sum of all the items in the order & sales tax.
const grandTotalItems = () => {
    order.orderItems.forEach(item => item.grandTotal = item.quantity * item.price * (1+0.07) )
    console.log(order);
}
grandTotalItems();