let form = document.getElementById('currencyForm'),
    eginput = document.getElementById('eginput'),
    usResult = document.getElementById('usResult'),
    eurResult = document.getElementById('eurResult');

const usdRate = 47.5;
const eurRate = 52;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const egpAmount = parseFloat(eginput.value);

  if (isNaN(egpAmount) || egpAmount <= 0) {
    alert("من فضلك أدخل مبلغ صحيح بالجنيه");
    return;
  }

  const usd = (egpAmount / usdRate).toFixed(2);
  const eur = (egpAmount / eurRate).toFixed(2);

  usResult.textContent = usd;
  eurResult.textContent = eur;
});
