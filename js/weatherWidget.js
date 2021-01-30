
/* start first script */
function ShowPosition(){

  if (navigator.geolocation)

  navigator.geolocation.getCurrentPosition(DisplayResult, DisplayError)

  else

 alert("Browser does not support geolocation");

}

function DisplayResult(Position){

  var message = " Latitude: " + Position.coords.latitude;

  message += "  Longitude: " + Position.coords.longitude;

  message += " Accuracy: " + Position.coords.accuracy + " meters ";

  alert(message);
}

function DisplayError(Error){

  var message;

    switch(Error.code){

      case 0: message = "Error retrieving location information";

      break;

      case 1: message = "User prevented location access";

      break;

      case 2: message = "Browser could not retrieve data";

      break;

      case 3: message = "Browser timed out during data retrieval";

      break;

    }

   alert(Message);

}

/* set cookie cname   */

function setCookie(cname,cvalue,exdays){

 var d = new Date();

 d.setTime(d.getTime() + (exdays*24*60*60*1000));

 var expires = "expires=" + d.toGMTString();

 document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}
/* get cookie cname    */
function getCookie(cname){

 var name = cname + "=";

 var decodedCookie = decodeURIComponent(document.cookie);

 var ca = decodedCookie.split(';');

    for(var i = 0; i < ca.length; i++){

        var c = ca[i];

        while (c.charAt(0) == ' '){

           c = c.substring(1);

        }

        if (c.indexOf(name) == 0){

         return c.substring(name.length, c.length);

        }

    }

  return "";

}
/* check cooike username */
function checkCookie(){

  var user=getCookie("username");

    if (user != ""){

     alert("Welcome again " + user);

    } 
    else{

     user = prompt("Please enter your name:","");

        if (user != "" && user != null){

         setCookie("username", user, 30);

        }

    }

}

/* end of first script */






/*start of second script */

var myIndex = 0;

carousel();

function carousel(){

    var i;

    var x = document.getElementsByClassName("mySlides2");

    for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";

    }

    myIndex++;

    if (myIndex > x.length) {myIndex = 1}

    x[myIndex-1].style.display = "block";

    setTimeout(carousel, 2000); // Change image every 2 seconds

}
/* set cookie cname */
function setCookie(cname, cvalue, exdays){

    var d = new Date();

    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

    var expires = "expires="+d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}

//taken from SitePoint Ltd from the tutorial section, JavaScript Date Object: The Beginner's Guide to JavaScript Date and Time

var date=new Date(); 

var format = "YYYY-MMM-DD DDD";

document.write(dateConvert(date,format));

function dateConvert(dateobj,format){

    var year = dateobj.getFullYear();

    var month= ("0" + (dateobj.getMonth()+1)).slice(-2);

    var date = ("0" + dateobj.getDate()).slice(-2);

    var hours = ("0" + dateobj.getHours()).slice(-2);

    var minutes = ("0" + dateobj.getMinutes()).slice(-2);

    var seconds = ("0" + dateobj.getSeconds()).slice(-2);

    var day = dateobj.getDay();

    var months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

    var dates = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    var converted_date = "";

    switch(format){

        case "YYYY-MM-DD":

        converted_date = year + "-" + month + "-" + date;

        break;

        case "YYYY-MMM-DD DDD":

        converted_date = year + "-" + months[parseInt(month)-1] + "-" + date + " " + dates[parseInt(day)];

        break;

    }

    return converted_date;

}

/*end of second script */        