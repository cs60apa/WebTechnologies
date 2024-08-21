// Track button click
document.getElementById('trackButton').addEventListener('click', function() {
    console.log('Button was clicked!');
    alert('Button was clicked! (Check console for tracking info)');
});

// Track form submission
document.getElementById('trackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log('Form submitted with the following details:');
    console.log('Name:', name);
    console.log('Email:', email);
    alert('Form submitted! (Check console for tracking info)');
});
