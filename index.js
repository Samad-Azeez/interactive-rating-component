// Select all elements with the class "rating" and store them in the variable "ratings"
const ratings = document.querySelectorAll(".rating");

// Select the paragraph element inside the element with the class "notify" and store it in the variable "notify"
const notify = document.querySelector(".notify > p");

// Select the element with the class "submit" and store it in the variable "submitBtn"
const submitBtn = document.querySelector(".submit");

// Initialize the variable "count" to null
let count = null;

// Iterate over each element in the "ratings" NodeList
ratings.forEach(function(item, i, all){
    // Add a click event listener to each element
    item.addEventListener("click", function(){
        // Remove the "selected-rating" class from all elements with the class "rating"
        all.forEach(function (node){
            node.classList.remove("selected-rating")
        })
        // Add the "selected-rating" class to the clicked element
        item.classList.add("selected-rating");
        // Update the value of "count" to the index of the clicked element plus 1
        count = i+1;
        // Call the renderButton function
        renderButton()
    })
})

// Function to render the submit button based on the value of "count"
function renderButton() {
    // Check if "count" is falsy (null or undefined)
    if(!count) {
        // If "count" is falsy, disable the submit button and set the title attribute to "Please select any!"
        submitBtn.disabled = true;
        submitBtn.setAttribute("title", "Please select any!")
    } else {
        // If "count" is truthy, enable the submit button and set the title attribute to "Proceed"
        submitBtn.setAttribute("title", "Proceed")
        submitBtn.removeAttribute("disabled")
    } 
}

// Call the renderButton function to initially render the submit button
renderButton()

// Add a click event listener to the submit button
submitBtn.addEventListener("click", function() {
    // Redirect the user to "/submit.html" with the query parameter "count" containing the value of "count"
    location.assign(`/submit.html?count=${count}`)
})