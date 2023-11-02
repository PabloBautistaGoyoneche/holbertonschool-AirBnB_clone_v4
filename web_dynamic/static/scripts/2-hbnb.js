/* Script that change class to available o remove */

document.addEventListener('DOMContentLoaded', function() {
    //Create a Ajax request
    const newRequest = new XMLHttpRequest();
    newRequest.open('GET', 'http://0.0.0.0:5001/api/v1/status/', true);
    //Configure the function to manage the response
    newRequest.onload = function() {
        if (newRequest.status >= 200 && newRequest.status < 400) {
            const data = JSON.parse(newRequest.responseText);
            //If status is "OK" add Class
            if(data.status === "OK") {
                $("#api_status").addClass("available");
            } else {
                $("#api_status").removeClass("available");
            }
        } 
    }
    newRequest.send(); // send the request
});
