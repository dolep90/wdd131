// Set current year dynamically in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set the last modified date in the footer
document.getElementById('lastModified').textContent += document.lastModified;
