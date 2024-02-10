// Define a function called urlParser that takes a URL string (str) as input
function urlParser(str) {
    // Initialize an empty object to store query parameters
    const queries = {};
    // Split the URL string by "?" to get the query string, then further split it by "&" to separate individual query parameters
    str.split("?")[1].split("&").forEach(function(item){
        // Split each query parameter by "=" to separate key and value, then add them to the 'queries' object
        const [key, value] = item.split("=")
        queries[key] = value
    })
    // Return the 'queries' object containing parsed query parameters
    return queries
}

// Call the urlParser function with the query parameters from the current page's URL (location.search),
// and log the result (parsed query parameters) to the console
console.log(urlParser(location.search))

// Select the <span> element inside an element with the class "notify p" and store it in the 'notify' variable
const notify = document.querySelector(".notify p span")

// Set the inner text of the selected <span> element to the value of the "count" query parameter parsed from the current page's URL
notify.innerText = urlParser(location.search).count;
