function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let numOfPeople = document.getElementById('people').value;

    if(bill == '' | serviceQuality == 0){
        alert("Por favor, preencha os valores")
        return;
    }

    if(numOfPeople == "" | numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById('each').style.display = "none";
    } 
    else {
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * serviceQuality) / numOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
    
    let final = bill / numOfPeople + +total;
    final = final.toFixed(2);
    document.getElementById('finalBill').innerHTML = final;
    document.getElementById('totalBill').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";
document.getElementById('totalBill').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
