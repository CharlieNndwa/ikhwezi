function sendMail() {
    // 1. Collect the data from the form
    var params = {
        from_name: document.getElementById("from_name").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    };

    // 2. Validate that fields aren't empty
    if (!params.from_name || !params.email_id || !params.message) {
        alert("Please fill in all fields before sending.");
        return;
    }

    const serviceID = "service_477fdyn"; // Replace with your Service ID
    const templateID = "template_in20bph"; // Replace with your Template ID

    // 3. Send the email
    emailjs.send(serviceID, templateID, params)
    .then(res => {
        // Clear the form fields after success
        document.getElementById("from_name").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("message").value = "";
        
        console.log(res);
        alert("Your message was sent successfully!");
    })
    .catch(err => {
        console.log(err);
        alert("Something went wrong. Please try again later.");
    });
}