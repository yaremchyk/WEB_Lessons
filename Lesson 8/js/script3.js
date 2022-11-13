test = "pop pop";

function separatorChecker(str)
{
    index = 0, 
    res = 0;
    while ((index = str.indexOf(' ', index + 1)) > 0) { 
        res++; 
    }
    alert(`Рядок містить ${res} пробілів`);
}

function firstToUpper(str)
{
    str = str[0].toUpperCase() + str.substring(1, str.length);
    alert(str);
}

function palindromeChecker(str)
{
    let tmprev = str.split("").reverse().join("");
    if (str == tmprev)
    {
        alert("Рядок є паліндромом");
    }else
    {
        alert("Рядок не є паліндромом");
    }
}

palindromeChecker(test);