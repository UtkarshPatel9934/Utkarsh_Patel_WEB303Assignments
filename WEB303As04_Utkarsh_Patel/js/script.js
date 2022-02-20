/*
    Assignment #4
    {Your name here}

    Student Name: Utkarsh Patel
    Student Number: 0785541
    Web Server Link: https://upatel.scweb.ca/
*/

$(function () {
    // your code here

    // Below code is for accessing the Geoloaction from the user's....
    navigator.geolocation.getCurrentPosition(success, fail);
    


    // the following code runs.... if the user accepts the Geolocation ie. share their current location.
    function success(position) {
        


        // below code runs...... if some data was previously stored in the LocalStorage.....
        if(localStorage.length > 0)
        {
            // below code is to access the current location from the user device and display it to the Document
            let accessing_curr_loc = document.createElement("h2");
            accessing_curr_loc.innerHTML = `<strong>Current Location:</strong><br>Latitude: ${position.coords.latitude} <br> Longitude: ${position.coords.longitude} <br> Timestamp: ${position.timestamp}`;
            accessing_curr_loc.style.color = 'black';
            let get_locationhere = document.getElementById('locationhere');
            get_locationhere.append(accessing_curr_loc);
            // below code is to access the current location from the user device and display it to the Document


            // retrieve the location previously stored in the localstorage and save it to the new variable...when user visited the page for the first time
            let retrievedLatitude = localStorage.getItem("Latitude");
            let retrievedLongitude = localStorage.getItem("Longitude");
            // retrieve the location previously stored in the localstorage and save it to the new variable...when user visited the page for the first time
            


            // diaplaying the location data stored in the localstorage to the page
            let retrieved_from_LocalStorage = document.createElement("h2");
            retrieved_from_LocalStorage.innerHTML = `<strong>Retrieved from the Local Storage:</strong><br>Latitude: ${retrievedLatitude} <br> Longitude: ${retrievedLongitude}`;
            retrieved_from_LocalStorage.style.color = 'red';
            get_locationhere = document.getElementById('locationhere');
            get_locationhere.append(retrieved_from_LocalStorage);
            // diaplaying the location data stored in the localstorage to the page



            // displaying the message to the user...as they are the returning users
            let welcome_Msg = document.createElement("h2");
            welcome_Msg.innerHTML = `Welcome back to the page...`;
            welcome_Msg.style.color = 'blue';
            get_locationhere.append(welcome_Msg);
            // displaying the message to the user...as they are the returning users



            // calculating the distance betweem the coordinates and finding the distance using the function provided and save it to the variable called saveDistanceTravelled
            let saveDistanceTravelled = calcDistanceBetweenPoints(retrievedLatitude, retrievedLongitude, position.coords.latitude, position.coords.longitude);
            // calculating the distance betweem the coordinates and finding the distance using the function provided and save it to the variable called saveDistanceTravelled
            

            // displaying the distance they travelled from their previous location on the page
            let distance_Travelled = document.createElement("h2");
            distance_Travelled.innerHTML = `You travelled ${saveDistanceTravelled.toFixed(2)}m (Meters) since you last visited this page.`;
            distance_Travelled.style.color = 'green';
            get_locationhere.append(distance_Travelled);
            // displaying the distance they travelled from their previous location on the page
            


                        /* For Bonus */
            
            // displaying the accuracy and distance they travelled in kilometers
            let bonus = document.createElement("h2");
            bonus.innerHTML = `<strong>Bonus:</strong><br>Accuracy: ${position.coords.accuracy}<br>Distance Travelled is: ${(saveDistanceTravelled / 1000).toFixed(4)}km`;
            bonus.style.color = 'orange';
            get_locationhere.append(bonus);
            // displaying the accuracy and distance they travelled in kilometers
            
                        /* For Bonus */




            // finally save the latest location in the localstorage by replacing the old one
            localStorage.setItem("Latitude", position.coords.latitude);
            localStorage.setItem("Longitude", position.coords.longitude);
            // finally save the latest location in the localstorage by replacing the old one



        }
        
        
        // below code runs...... if no data was previously stored in the LocalStorage.....
        else
        {

            
            // below code is to get the current location from the object and display it in the Document...
            let display_Curr_Loc = document.createElement("h2");
            display_Curr_Loc.innerHTML = `<strong>Current Location:</strong><br>Latitude: ${position.coords.latitude} <br> Longitude: ${position.coords.longitude} <br> Timestamp: ${position.timestamp}`;
            display_Curr_Loc.style.color = 'black';
            let get_locationhere = document.getElementById('locationhere');
            get_locationhere.append(display_Curr_Loc);
            // below code is to get the current location from the object and display it in the Document...
            
            
            // saving the Current Location of the users...in to a variable called saveLatitute and saveLongitude
            var saveLatitude = position.coords.latitude;
            var saveLongitude = position.coords.longitude;
            // saving the Current Location of the users...in to a variable called saveLatitute and saveLongitude
            
            // for displaying the welcome message to the user... if they vists the page for the first time
            let visited_First_Time = document.createElement("h2");
            visited_First_Time.innerHTML = `Welcome to the page for the first time...`;
            visited_First_Time.style.color = 'blue';
            get_locationhere.append(visited_First_Time);
            // for displaying the welcome message to the user... if they vists the page for the first time
            
            // if Geolocation is allowed from tehe user...saving it Current Location in the Localstorage....
            localStorage.setItem("Latitude", saveLatitude);
            localStorage.setItem("Longitude", saveLongitude);
            // if Geolocation is allowed from tehe user...saving it Current Location in the Localstorage....
        }
    }

    // the following code runs.... if the user reject the Geolocation.
    function fail(){

        // getting the div to dispplay the message......
        let get_locationhere = document.getElementById('locationhere');


        // creates a new tag and insert the message in it and finally append the tag to the div in the document...
        let reject_Msg = document.createElement("h2");
        reject_Msg.innerHTML = "You must allow geolocation in order to use the application....";
        reject_Msg.style.color = 'DarkRed';
        get_locationhere.append(reject_Msg);
        // creates a new tag and insert the message in it and finally append the tag to the div in the document...
    }
    



    
    // Below code is provide in the starter files for calculation the distance between 2 points....if user revisted the page......
    
    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


