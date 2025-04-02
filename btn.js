function toggleView() {
    let contact = document.querySelector(".contact");
    let newPage = document.querySelector(".new-page");

    if (contact.style.display !== "none") {
        contact.style.visibility = "hidden";  
        contact.style.opacity = "0";  
        contact.style.position = "absolute"; // Prevents layout shifts

        newPage.style.display = "flex"; 
        newPage.style.visibility = "visible";
        newPage.style.opacity = "1";
    }
}

function showContactPage() {
    let contact = document.querySelector(".contact");
    let newPage = document.querySelector(".new-page");

    newPage.style.display = "none";  

    contact.style.visibility = "visible";  
    contact.style.opacity = "1";  
    contact.style.position = "relative"; // Restore position when visible
}
