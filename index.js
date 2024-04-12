checkValidation = (inputId) => {
    const input = document.getElementById(inputId);
    const exclamationIcon = input.parentElement.querySelector('.fa-exclamation-triangle');

    if (isNaN(input.value) || (input.value)<0) { // Check if the input is not a number
        exclamationIcon.style.display = 'inline'; // Display the exclamation triangle icon
    } else {
        exclamationIcon.style.display = 'none'; // Hide the exclamation triangle icon
    }
}


calculate = () => {
    if(isNaN(document.getElementById("income").value) || 
    isNaN(document.getElementById("extra_Income").value)  ||
    isNaN(document.getElementById("deductions").value) )
    {
        alert("Please check if the values are all Numericals");
        return;
    }
    var grossIncome = parseFloat(document.getElementById("income").value);
    var extraIncome = parseFloat(document.getElementById("extra_Income").value);
    var deduction = parseFloat(document.getElementById("deductions").value);
    var age = document.getElementById("age").value;
    var totalIncome = grossIncome + extraIncome - deduction;

    const checkAge = document.querySelector('#age + .fa-exclamation-triangle');
    if(age === ""){
        checkAge.style.display = 'inline';
        return;
    }
    else{
        checkAge.style.display = 'none'
    }
    

    if(!isNaN(totalIncome) && totalIncome > 0 && grossIncome > 0 && extraIncome > 0 && deduction > 0){
        var tax = 0;
        if (totalIncome > 800000) {
            switch (age) {
                case 'lt40':
                    tax = 0.3 * (totalIncome - 800000);
                    break;
                case 'lt60':
                    tax = 0.4 * (totalIncome - 800000);
                    break;
                case 'gt60':
                    tax = 0.1 * (totalIncome - 800000);
                    break;
            }
            // Get the modal and button elements
            const modal = document.getElementById('myModal');
            const closeModalBtn = document.getElementById('closeModalBtn');

            modal.style.display = 'block';
            document.getElementById("result-text").innerHTML= '<p> Your Calculated Tax will be : <h3>&#8377;' + tax + '</h3></p>' + '<p>Your Total Income after tax deductions will be : <h3>&#8377;' + (totalIncome-tax) + '</h3></p>';

            closeModalBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            // Close the modal when clicking outside the modal content
            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
        else{
            tax="No tax for this amount of income";
        }
    }
    else{
        alert("Please ensure all fields are filled or no negative values are used.");
    }


}