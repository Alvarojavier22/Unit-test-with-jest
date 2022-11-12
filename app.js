console.log("Hello World")

const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 3))

let fromDollarToYen = (dollar) => {
    return((dollar / 1.2) * 127.9);
};

let fromEuroToDollar = (euro) => {
    let result = euro * 1.2;
    return result
};

let fromYenToPound = (yen) => {
    return ((yen / 127.9) * 0.8);
};


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

