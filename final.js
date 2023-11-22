

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   // Add a click event listener to each anchor element
   anchor.addEventListener("click", function(e) {
      // Prevent the default navigation behavior
      e.preventDefault();
      
      // Get the value of the href attribute from the clicked anchor
      const targetId = this.getAttribute("href");
      
      // Select the target element using the retrieved href attribute
      const targetElement = document.querySelector(targetId);
      
      // Scroll the target element into view with smooth scrolling behavior
      targetElement.scrollIntoView({
         behavior: "smooth"
      });
   });
});



let popup = document.getElementById("popup");

// Define a function to open the popup
function openPopup() {
   // Add the "open-popup" class to the popup element
   popup.classList.add("open-popup");
}

// Define a function to close the popup
function closePopup() {
   // Remove the "open-popup" class from the popup element
   popup.classList.remove("open-popup");
}