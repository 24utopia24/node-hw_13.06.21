var op;
function func() {
    var result;
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    switch (op) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2) {
        result = num1 / num2;
        } else {
        result = 'очень много';
        }
        break;
    default:
        result = 'а где????';
    }

    document.getElementById("result").innerHTML = `${num1} ${op} ${num2} = ${result}`;
}