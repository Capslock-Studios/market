document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:5000/data")
        .then(response => response.json())
        .then(users => {
            const tableBody = document.getElementById("userTableBody");
            tableBody.innerHTML = ""; // Clear old data

            users.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error fetching users:", error));
});
