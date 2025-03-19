function submitData() {
    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        complaint: document.getElementById("complaint").value,
        savvy: document.getElementById("savvy").value,
        rating: document.getElementById("rating").value,
        todo: document.getElementById("todo").value,
        eventDate: document.getElementById("eventDate").value,
        eventName: document.getElementById("eventName").value,
        partner: document.getElementById("partner").value
    };

    fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => alert("Data submitted successfully!"))
    .catch(error => console.error("Error:", error));
}



document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        const userData = { name, email, phone };

        fetch("http://localhost:5000/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            form.reset(); // Clear the form after submission
        })
        .catch(error => console.error("Error:", error));
    });
});

