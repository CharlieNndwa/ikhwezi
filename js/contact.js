function sendMail() {
    // 1. Collect data
    var params = {
        from_name: document.getElementById("from_name").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    };

    // 2. Validation with Toastify Error
    if (!params.from_name || !params.email_id || !params.message) {
        Toastify({
            text: "Oops! Please fill in all fields.",
            duration: 4000,
            gravity: "top", 
            position: "right", 
            style: {
                background: "#e74c3c", // Sleek professional red
                borderRadius: "10px",
            },
        }).showToast();
        return;
    }

    const serviceID = "service_477fdyn";
    const templateID = "template_in20bph";

    // Show a "Sending..." toast so the user knows something is happening
    const loadingToast = Toastify({
        text: "Sending your message...",
        duration: -1, // Stays until we manually hide it
        gravity: "top",
        position: "right",
        style: { background: "#3498db", borderRadius: "10px" }
    }).showToast();

    // 3. Send via EmailJS
    emailjs.send(serviceID, templateID, params)
    .then(res => {
        loadingToast.hideToast(); // Hide the loading message
        
        // Success Toast
        Toastify({
            text: "Message Sent! We'll get back to you shortly. ✨",
            duration: 5000,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)", // Modern NGO Green/Teal
                borderRadius: "10px",
                fontWeight: "600"
            },
        }).showToast();

        // Clear fields
        document.getElementById("from_name").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("message").value = "";
    })
    .catch(err => {
        loadingToast.hideToast();
        
        // Error Toast
        Toastify({
            text: "Could not send. Please check your connection.",
            duration: 5000,
            gravity: "top",
            position: "right",
            style: {
                background: "#c0392b",
                borderRadius: "10px"
            },
        }).showToast();
        console.error("EmailJS Error:", err);
    });
}