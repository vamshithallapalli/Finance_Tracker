document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const description = document.getElementById('description').value;

    // Add transaction to table
    const tableBody = document.querySelector('#transaction-table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${date}</td>
        <td>${category}</td>
        <td>${amount.toFixed(2)}</td>
        <td>${description}</td>
    `;
    tableBody.appendChild(newRow);

    // Update summary
    updateSummary(amount);

    // Clear form
    document.getElementById('transaction-form').reset();
});

function updateSummary(amount) {
    let totalIncome = parseFloat(document.getElementById('total-income').textContent);
    let totalExpenses = parseFloat(document.getElementById('total-expenses').textContent);
    let netBalance = parseFloat(document.getElementById('net-balance').textContent);

    if (amount > 0) {
        totalIncome += amount;
    } else {
        totalExpenses += amount;
    }

    netBalance = totalIncome + totalExpenses;

    document.getElementById('total-income').textContent = totalIncome.toFixed(2);
    document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
    document.getElementById('net-balance').textContent = netBalance.toFixed(2);
}
