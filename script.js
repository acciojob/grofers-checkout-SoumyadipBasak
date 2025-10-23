const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // 1. Get all elements with the class 'price' which contain the item prices.
    // NOTE: The HTML uses class="price", not class="prices" as mentioned in the Hint.
    const priceElements = document.querySelectorAll('.price');
    
    let totalPrice = 0;
    
    // 2. Iterate through the price elements and calculate the total sum.
    priceElements.forEach(priceCell => {
        // Get the text content, trim any whitespace, and convert it to a number.
        const price = parseInt(priceCell.textContent.trim());
        
        // Add the price to the total if it's a valid number.
        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    // 3. Find the table element.
    const table = document.querySelector('table');
    
    // Check if a total row already exists to prevent duplicates on multiple clicks.
    // If a total row exists (e.g., with a specific ID), remove it first.
    let existingTotalRow = document.getElementById('total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // 4. Create a new table row (<tr>) for the total price.
    const totalRow = document.createElement('tr');
    totalRow.id = 'total-row'; // Assign an ID for easy removal/check

    // 5. Create a single table data cell (<td>) to span both columns.
    const totalCell = document.createElement('td');
    
    // Set the text content for the total price.
    totalCell.textContent = `Total Price: Rs ${totalPrice}`;
    
    // Make the total visually distinct (optional but helpful).
    totalCell.style.fontWeight = 'bold';
    totalCell.style.textAlign = 'center';
    totalCell.style.backgroundColor = '#f0f0f0'; // Light background for visibility

    // The cell needs to span both columns (Item and Prices).
    totalCell.setAttribute('colspan', '2'); 
    
    // 6. Append the cell to the row and the row to the table.
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);