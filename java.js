function showingResult()
{
    var cardNumber = document.getElementById("q1").value ;
    var cardShow = cardNumber.slice((cardNumber.length - 4),cardNumber.length) 
    var sterik = "*"
    for (var i = 0; i<(cardNumber.length - 5); i++)
    {
        sterik = sterik + "*"
    }
    var res = document.getElementById("result1");
    res.innerHTML = "Credit Card Number is "+sterik+cardShow
}
function calPotatoes()
{
    var potatoes = document.getElementById("q2").value ;
    var numOfPotato = 0;
    for (var i =0; i< potatoes.length ; i++)
    {
        if(potatoes.slice(i , i+6) === "potato")
        {
            numOfPotato = numOfPotato + 1 ;
        }
        var res = document.getElementById("result2");
        res.innerHTML = "There are "+numOfPotato+" potatoes in the string."
    }
}
function repeatingChar()
{
    var char = document.getElementById("q3").value;
    var res = document.getElementById("result3");
    var newString = char.slice(0,1) ;
    newString = newString+newString
    var stringToShow = newString
    for (var i = 1 ; i<char.length ; i++)
    {
        newString = char.slice(i,i+1) ;
        newString = newString+newString
        stringToShow = stringToShow+newString
    }
    res.innerHTML = "The string after repeating each character once is "+stringToShow
}
function calSalary()
{
    var basicSalary = document.getElementById("q6").value;
    basicSalary = parseInt(basicSalary)
    var res = document.getElementById("result6");
    var allowanceHRA = 0 ;
    var allowanceDA = 0  ;
    var totalAllowance = 0 ;
    allowanceHRA = parseInt(allowanceHRA)
    allowanceDA = parseInt(allowanceDA)
    totalAllowance = parseInt(totalAllowance)

    if (basicSalary <= 10000)
    {
        allowanceHRA = ((basicSalary * 20) / 100 )
        allowanceDA = ((basicSalary * 80) / 100 )
        totalAllowance = allowanceHRA + allowanceDA ;
    }
    if (basicSalary >10000 && basicSalary <= 20000)
    {
        allowanceHRA = ((basicSalary * 25) / 100 )
        allowanceDA = ((basicSalary * 90) / 100 )
        totalAllowance = allowanceHRA + allowanceDA ;
    }
    if (basicSalary > 20000)
    {
        allowanceHRA = ((basicSalary * 30) / 100 )
        allowanceDA = ((basicSalary * 95) / 100 )
        totalAllowance = allowanceHRA + allowanceDA ;
    }
    basicSalary = basicSalary + totalAllowance ;
    basicSalary = Math.floor(basicSalary)
    res.innerHTML = "Gross Salary is "+basicSalary

}
function calBill()
{
var noOfUnits = document.getElementById("q5").value ;
var res = document.getElementById("result5");
var i = 1 ;
var j = 1 ;
var k = 1 ;
var l = 1 ;
var billBelow50 = 0;
var billbt50to150 = 0;
var billbt150to250 = 0;
var billMoreThan250 = 0
var totalBill ;
while(i <50 && i < noOfUnits)
{
    i = i + 1;
    billBelow50 = i * 0.50 ;
    j = j + 1 ;  
    k = k + 1 ; 
    l = l + 1 ;
}

if(i >= 50)
{
    i = 1;
    while(i <= 100 && i <= (noOfUnits - j))
    { 
        billbt50to150 = i * 0.75 ;
        i = i + 1 ;
        k = k + 1 ;  
        l = l + 1 ;  
    }
}
if(i >= 100)
{
    i = 1;
    while(i <= 100 && i <= (noOfUnits - k))
    {
        billbt150to250 = i * 1.20 ;
        i = i + 1 ;
        l = l + 1 ;
    }
}
if(i >= 100)
{
    i = 1 ;
    while(i <= (noOfUnits - l))
    {
        billMoreThan250 = i * 1.50 ;
        i = i + 1 ;
    }
}
totalBill = billBelow50 + billbt50to150 + billbt150to250 + billMoreThan250
totalBill = Math.floor(totalBill)
var tax = ((totalBill * 20) / 100)
tax = Math.floor(tax)
totalBill = tax+totalBill
res.innerHTML = "Your total bill is "+totalBill+" Rs."
}
function calSum()
{
    var sum = 0 ;
    sum = parseInt(sum)
    var i = 0 ; 
    i = parseInt(i)
    while(i < 1000)
    {
        if (i%3 == 0)
        {
            sum = sum + i ;
        }
        i = i + 1 ;
    }
    var res = document.getElementById("result7") ;
    res.innerHTML = "The sum of all multiples of 3 below 1000 is "+sum
}
function checkStrings()
{
    var st1 = document.getElementById("q4a").value ;
    var st2 = document.getElementById("q4b").value ;
    var res = document.getElementById("result4");
    var number = 0;
    for (var i = 0 ; i<=st2.length; i++)
    {
        if (st2.slice(i,i+1) == st1)
        {
            number = number + 1 ; 
        }
    }
    res.innerHTML = "The character "+st1+" appears "+number+" times."
}


