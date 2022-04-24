




function compute(){
    let amt1 = Number(document.getElementById('amt1').value)
    let amt2 = Number(document.getElementById('amount-2').value);
    let amt3 = Number(document.getElementById('amount-3').value);
    let amt4 = Number(document.getElementById('amount-4').value);
    let amt5 = Number(document.getElementById('amount-5').value);

    if(amt1 != 0)
        document.getElementById('out1').value = amount(amt1);
    if(amt2 != 0)
        document.getElementById('output-2').value = amount(amt2);
    if(amt3 != 0)
        document.getElementById('output-3').value = amount(amt3);
    if(amt4 != 0)
        document.getElementById('output-4').value = amount(amt4);
    if(amt5 != 0)
        document.getElementById('output-5').value = amount(amt5);

}

function amount(money){
    
    if(money > 200000){
        money = money + money * 0.1;
        money = money - money * 0.002;
    }
    else if(money > 100000){
        money = money + money * 0.02;
        money = money - money * 0.0005;
    }
    else{
        money = money + money * 0.03;
    }

    return money
}