var url = "https://nikeshulak.github.io/tools/location";

var locationName = "Unknown";

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function myFunction() {
  // fetch Location name from url first
  lat = getUrlParameter('lat');
  lng = getUrlParameter('lng');
  date = getUrlParameter('date');
  loadMap = getUrlParameter('loadMap');
  locationName = getUrlParameter('locationName');
  console.log(locationName)

  if (lat == null) {
    locationName = prompt("Location name", "Unknown");
    console.log(locationName)
    
    if (locationName != null) {
      // document.getElementById("demo").innerHTML = "Hello " + locationName + "! How are you today?";
      // getLocation();

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        // x.innerHTML = "Try enabling location."; // Geolocation is not supported by this browser. 
      }
    }
  }
  else {
    console.log(locationName)

    var locationUrl = `${url}/?locationName=${locationName}&lat=${lat}&lng=${lng}&date=${date}`;
    var mapIframe = "";

    if(loadMap == "true") {
      mapIframe = `<iframe 
      width="100%" 
      height="400" 
      frameborder="0" 
      scrolling="no" 
      marginheight="0" 
      marginwidth="0" 
      src="https://maps.google.com/maps?q=${lat},${lng}&hl=es&z=14&amp;output=embed"
     >
     </iframe>`
    }

    $("#map").html(`Share your location: 
  <a style="color: #236073;" href="${locationUrl}">${locationName}</a> <br>

  <p>You are here: ${lat},${lng}</p>
  <div style="position: relative;">
    <p style="position: absolute;color: white;padding: 0 10px;">
      <strong>${date}</strong> 
      <a href="${url}" style="background: #fcfcfc; color: #2d2d2d;text-decoration: none;padding: 5px 10px;border-radius: 4px;font-weight: bold;">
        Refresh
      </a>
    </p>
    <img src="./location-mobile.jpg" style="max-width: 100%;" />
  </div>
   <p id="demo">Note: Please enable location and click on Refresh button above.</p>
   <p>
    <a href="${locationUrl}&loadMap=true" style="background: #2d2d2d; color: #fcfcfc;text-decoration: none;padding: 5px 10px;border-radius: 4px;font-weight: bold;">
      Load Map
    </a>
   </p>

   ${mapIframe}
  `);

  }
}

var x = document.getElementById("demo");

function getLocation() {
}

function showPosition(position) {
  var day = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat"
  }

  var month = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec"
  }

  var date = new Date();
  var today = date.getHours() + ":" + date.getMinutes() + " " + day[date.getDay()] + ", " 
   + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();//  + ":" + date.getSeconds();
  console.log(today);

  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // var dateString = "Date: " + today + ", ";
  var locationString = "/?locationName=" + locationName + "&lat=" + latitude + 
  "&lng=" + longitude + "&date=" + today; 
  ;

  // x.innerHTML = locationString;

  // redirect to locationString
  var actual_link = url + locationString;

  console.log(actual_link)
  // x.innerHTML = actual_link;
  // x.innerHTML = 'Success';

  window.location.href = actual_link;
  // stored in cookie, but need to refresh inorder to get in php
  // createCookie("location", locationString, "10"); 


}
