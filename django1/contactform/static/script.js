
var modal = document.getElementById("successModal");

var span = document.getElementsByClassName("close")[0];

document.getElementById("contactForm").addEventListener('submit', function(event) {
    event.preventDefault(); 
    var formData = new FormData(this);
    fetch('/contact/', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("modalMessage").textContent = data.message;
        modal.style.display = "block";
    })
    .catch(error => console.error('Error:', error));
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
