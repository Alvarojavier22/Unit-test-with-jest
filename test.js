const { sum } = require('./app.js');

test('adds 14 +9 to equeal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
})

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test ("One Yen should be 0.021 Pounds", function(){
    let { fromYenToPound} = require('./app.js')
    let pound = fromYenToPound(3.5)
    const expected = (3.5/127.9)*0.8
    expect(pound.toFixed(3)).toFixed
})

test("One Dollar should be 373.04", function(){
    let { fromDollarToYen } = require('./app.js')
    let yen = fromDollarToYen(3.5)
    let expected = (3.5/1.2) * 127.9
    expect(yen.toFixed(2)).toBe("373.04");
})

