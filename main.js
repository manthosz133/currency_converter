function convertCurrency() {
  var amount = parseFloat(document.getElementById('amount').value);
  var exchangeRate = 7.79; 
  var result = amount * exchangeRate;
  document.getElementById('result').innerText = "จำนวนเงินTHB: " + result.toFixed(2)+"Bath";
}