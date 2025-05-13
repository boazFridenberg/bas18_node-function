function currencies() {
    fetch('https://api.vatcomply.com/currencies')
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('currencyList');
            select.innerHTML = '';

            for (const code in data) {
                const currency = data[code];
                const option = document.createElement('option');
                option.value = code;
                option.textContent = `${code} - ${currency.name}`;
                select.appendChild(option);
            }
        })
        .catch(error => console.error('שגיאה בעת שליפת המטבעות:', error));
}
function getExchangeRates() {
    const selectedCurrency = document.getElementById('currencyList').value;

    fetch(`https://api.vatcomply.com/rates?base=${selectedCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rates = data.rates;
            const resultContainer = document.getElementById('vat-result');

            let output = `<h3>Exchange rates against the ${selectedCurrency}</h3><ul>`;
            for (const [code, rate] of Object.entries(rates)) {
                output += `<li>${code}: ${rate}</li>`;
            }
            output += '</ul>';

            resultContainer.innerHTML = output;
        })
        .catch(error => console.error('שגיאה בעת שליפת שערי המטבע:', error));
}
document.addEventListener('DOMContentLoaded', () => {
    currencies();
    document.getElementById('check').addEventListener('click', getExchangeRates);
});




