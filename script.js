// 1. Create and append the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // 2. Select all price elements using the correct class name from the HTML
    const priceElements = document.querySelectorAll('.price');
    
    let totalPrice = 0;
    
    // 3. Loop through the elements, convert text to a number, and sum
    priceElements.forEach(priceCell => {
        const price = parseInt(priceCell.textContent.trim());
        
        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    // 4. Find the table element
    const table = document.querySelector('table');
    
    // 5. Check and remove any existing total row to prevent duplicates
    let existingTotalRow = document.getElementById('total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // 6. Create the new row (<tr>)
    const totalRow = document.createElement('tr');
    totalRow.id = 'total-row'; // Use an ID to easily target it later

    // 7. Create the total cell (<td>)
    const totalCell = document.createElement('td');
    
    // Set the content
    totalCell.textContent = `Total Price: Rs ${totalPrice}`;
    
    // 8. Crucial step: Make the cell span both columns
    totalCell.setAttribute('colspan', '2'); 
    
    // Optional: Add basic styling for visibility
    totalCell.style.fontWeight = 'bold';
    totalCell.style.textAlign = 'center';
    totalCell.style.backgroundColor = '#dff0d8'; // Light green background

    // 9. Append the cell to the row, and the row to the table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};

// 10. Attach the function to the button click event
getSumBtn.addEventListener("click", getSum);