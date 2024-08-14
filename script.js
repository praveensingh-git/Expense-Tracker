const expenseForm = document.querySelector('#expense');
const expenseList = document.getElementById('expenseList');

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    if (description && category && category !== "" && !isNaN(amount) && amount > 0) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${description}</td>
            <td>${category}</td>
            <td>${amount}</td>
        `;
        expenseList.appendChild(newRow);

        // Clear form fields after submission
        expenseForm.reset();
    } else {
        alert('Please fill out all fields correctly.');
    }
});
