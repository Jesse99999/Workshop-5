// Exercise 1
function validateForm(event) {
    const emailField = document.getElementById('email');
    const commentField = document.getElementById('comment');
    let isValid = true;
    

    alert(`Email: ${emailField.value}\nComment: ${commentField.value}`);

    // Email validation
    if (emailField.value.length < 6 || emailField.value.length > 15 || !emailField.value.includes("@")) {
        emailField.style.border = "2px solid red";
        displayError("Invalid email address!", emailField);
        isValid = false;
    } else {
        emailField.style.border = "";
    }
    
    // Comment validation
    if (commentField.value.trim() === "" || commentField.value.length > 50) {
        commentField.style.border = "2px solid red";
        displayError("Comment must be less than 50 characters and not empty!", commentField);
        isValid = false;
    } else {
        commentField.style.border = "";
    }
    if (!isValid) {
        event.preventDefault();
    }
    return isValid;

   
}

function displayError(message, element) {
    let errorText = document.createElement("span");
    errorText.style.color = "red";
    errorText.innerText = message;
    element.parentNode.appendChild(errorText);


    
}

// exercise 2

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    
    const type = document.getElementById("type").value;
    const years = parseInt(document.getElementById("years").value);
    let cost = 0;
    
    switch(type) {
        case 'basic': cost = 10; break;
        case 'premium': cost = 15; break;
        case 'gold': cost = 20; break;
        case 'platinum': cost = 25; break;
    }
    
    let totalCost = cost * years;

    // Discounts
    let discountMessage = '';
    if (years > 2) {
        totalCost *= 0.8;
        discountMessage = "Saat 20% alennuksen!";
    }
    if (years >= 5) {
        totalCost -= 5;
        discountMessage = "Saat 20% alennuksen ja lisäksi 5€ lisäalennuksen!";
    }
    
    document.getElementById("cost").value = totalCost.toFixed(2);
    alert(discountMessage);
});


//Exercise 3

function calculateBookOrder() {
    let quantity = parseInt(document.getElementById('quantity').value);
    let price = parseFloat(document.getElementById('price').value);
    let tax = parseFloat(document.getElementById('tax').value);
    let discount = parseFloat(document.getElementById('discount').value);
    let shipping = parseFloat(document.getElementById('shipping').value);

    // double the discount if quantity > 100
    if (quantity > 100) {
        discount *= 2;
    }

    // calculate total
    let total = (quantity * price * (1 + tax / 100)) - discount + shipping;
    document.getElementById('total').value = total.toFixed(2);
}

document.getElementById("submit-calculate").addEventListener("click", function(event) {
    event.preventDefault();
    calculateBookOrder();
});

// Exercise 4

function showDetails() {
    const contactMethod = document.getElementById("contactMethod").value;
    const extraFields = document.getElementById("extraFields");
    
    if (contactMethod) {
        extraFields.style.display = "block";
        document.getElementById("contactDetails").placeholder = `Enter ${contactMethod} details`;
    } else {
        extraFields.style.display = "none";
    }
}
