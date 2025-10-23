const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with the class 'price' (which holds the price values)
    const priceElements = document.querySelectorAll('.price');
    
    let totalPrice = 0;
    
    // Iterate and sum the prices
    priceElements.forEach(priceCell => {
        // Convert the text content to an integer and add it to the total
        const price = parseInt(priceCell.textContent.trim());
        
        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    // Find the table element
    const table = document.querySelector('table');
    
    // Remove any existing total row to prevent duplicates upon multiple clicks
    let existingTotalRow = document.getElementById('total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create the new table row (<tr>)
    const totalRow = document.createElement('tr');
    totalRow.id = 'total-row'; 

    // Create a single table data cell (<td>)
    const totalCell = document.createElement('td');
    
    // Set the content
    totalCell.textContent = `Total Price: Rs ${totalPrice}`;
    
    // Make the cell span both columns ('Item' and 'Prices in Rs')
    totalCell.setAttribute('colspan', '2'); 
    
    // Optional styling for clarity
    totalCell.style.fontWeight = 'bold';
    totalCell.style.textAlign = 'center';
    totalCell.style.backgroundColor = '#f0f0f0'; 

    // Append the cell to the row and the row to the table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);