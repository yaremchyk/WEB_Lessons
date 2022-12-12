function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function genArray() {
    let NumArr = new Array();
    for (i = 0; i <= 9; i++) {
        NumArr[i] = getRandomInt(100);
    }
    return NumArr;
}

let arr = genArray();

function showArray(NumArr, count = 9) {
    msg = "Numbers in array:"
    for (i = 0; i <= count; i++) {
        msg = msg + " " + NumArr[i];
    }
    alert(msg);
}

function showPairedArray(NumArr) {
    msg = "Numbers in paired array:"
    for (i = 0; i <= 9; i++) {
        if (NumArr[i] % 2 == 0) {
            msg = msg + " " + NumArr[i];
        }
    }
    alert(msg);
}

function checkIfDivBySeven(NumArr) {
    IsDivBySeven = false;
    for (i = 0; i <= 9; i++) {
        if (NumArr[i] % 7 == 0) {
            IsDivBySeven = true;
        }
    }
    if(IsDivBySeven) {alert("The array contains an element that can be divided by 7.");}
    else
    {
        alert("The array DOES NOT contain an element that can be divided by 7.");
    }
}

function sortArray(NumArr)
{
    NumArr = NumArr.sort((a, b) => b - a);
    showArray(NumArr);
}

function setZero(NumArr)
{
    for (i = 0; i <= 9; i++) {
        if (i >= 5) {
            NumArr[i] = 0;
        }
    }
    showArray(NumArr);
}

function checkForDuplicates(NumArr)
{
    NumArr = NumArr.filter((item, index) => NumArr.indexOf(item) != index);
    if (NumArr.length > 0) {alert("The array contains at least one duplicate.");}
    else {alert("The array DOES NOT contain at least one duplicate.");}
}

function spliceByIndex(NumArr, index)
{
    NumArr.splice(index, 1);
    showArray(NumArr, 8);
}

showArray(arr);