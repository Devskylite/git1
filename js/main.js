/*contact button show number on click*/
var phone = "(613) 581-0047";

document.getElementById("myBtn").addEventListener("click", function() {
	myFunction(phone);
});

function myFunction() {
	var result = phone;
	document.getElementById("phone").innerHTML = result;
}

/*map not working ...use iframe for now
function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
       	zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    }); 
}
*/