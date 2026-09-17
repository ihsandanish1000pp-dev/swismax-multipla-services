
function sendMessage(event) {

            // Stop page refresh
            event.preventDefault();


            // Get user name
            let name =
                document.getElementById("name").value;


            // Get selected service
            let service =
                document.getElementById("service").value;


            // Show success message
            document.getElementById("message").innerHTML =
                "Thank you " + name +
                "! Your request for " +
                service +
                " has been received.";


            // Clear form
            document.querySelector("form").reset();


            // Remove message after 3 seconds
            setTimeout(function () {

                document.getElementById("message").innerHTML = "";

            }, 3000);

        }





