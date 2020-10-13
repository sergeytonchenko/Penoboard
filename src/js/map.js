$(document).ready(function(){
    let map;

    function initMap() {

        const myLatLng = { lat: 46.669226, lng: 32.692585 };

        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 46.662313, lng: 32.627795 },
            zoom: 13    ,
        });

        new google.maps.Marker({
            position: myLatLng,
            map,            
            icon: {
                url: '../img/marker.png',
                labelOrigin: new google.maps.Point(32, -15),
            },                
            label: {                
                color: '#830100',                
                text: 'Антоновка',
                fontWeight: 'bold',
                fontSize: '15px'               
            },            
        });
    }

    initMap();
})