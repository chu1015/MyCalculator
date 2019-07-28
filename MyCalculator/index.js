var firstNum = -1;
var op;
var temp;

function numClick(num) {
    document.getElementById("result").innerHTML += num;
}

function opClick(str) {
    //紀錄畫面上的數值
    if (firstNum == -1) {
        firstNum = document.getElementById("result").innerHTML;
    } else {
        caculate();
        firstNum =temp;
        
    }
    //清空畫面
    op = str;
    document.getElementById("result").innerHTML = "";

}


function caculate() {
    var Int = document.getElementById("result").innerHTML;
    switch (op) {
        case '+':
            temp = parseFloat(firstNum) + parseFloat(Int);
            break;
        case '-':
            temp = parseFloat(firstNum) - parseFloat(Int);
            break;
        case '*':
            temp = parseFloat(firstNum) * parseFloat(Int);
            break;
        case '/':
            temp = parseFloat(firstNum) / parseFloat(Int);
            break;
    }
}

function answer() {
    caculate();
    document.getElementById("result").innerHTML = temp;
    op = '';
    // console.log(temp);
    // console.log(op);
}
//清空
// firstNum = 0;

function clrClick() {
    document.getElementById("result").innerHTML = '';
    temp=0;
    firstNum=-1;
    // Int = 0;
}