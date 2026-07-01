function calculation() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const number3 = parseFloat(num3);

    //Calculate Sum
    const sum = number1 + number2 + number3;

    //Display the results
    document.getElementById('result').textContent= 'The sum is ' +sum;
}

function product() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const number3 = parseFloat(num3);
    
    //Calculate Product
    const product = number1 * number2 * number3;

    //Display the results
    document.getElementById('result').textContent= 'The product is ' +product;
}
