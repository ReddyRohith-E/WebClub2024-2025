document.addEventListener("DOMContentLoaded", function() {
    
    // Load nav
    fetch("assets/Components/nav.html")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation for nav:', error);
    });

    // Load footer
    fetch("assets/Components/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error('Error loading footer:', error));
});