
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const tableBody = document.querySelector("#dataTable tbody");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = form.elements.firstName.value;
        const lastName = form.elements.lastName.value;
        const address = form.elements.address.value;
        const pincode = form.elements.pincode.value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const foodOptions = form.elements.food.selectedOptions;
        const state = form.elements.state.value;
        const country = form.elements.country.value;

        if (foodOptions.length < 2) {
            alert("Please select at least 2 food options.");
            return;
        }

        const foodSelection = Array.from(foodOptions).map(option => option.value);

        // Append the form data to the table
        const newRow = tableBody.insertRow(tableBody.rows.length);
        newRow.insertCell().textContent = firstName;
        newRow.insertCell().textContent = lastName;
        newRow.insertCell().textContent = address;
        newRow.insertCell().textContent = pincode;
        newRow.insertCell().textContent = gender;
        newRow.insertCell().textContent = foodSelection.join(", ");
        newRow.insertCell().textContent = state;
        newRow.insertCell().textContent = country;

        // Clear the form fields
        form.reset();
    });
});
