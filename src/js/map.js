$(document).ready(function(){
    let map;

    function initMap() {

        const myLatLng = { lat: 46.667726, lng: 32.689785 };

        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 46.668713, lng: 32.632895 },
            zoom: 13
        });

        new google.maps.Marker({
            position: myLatLng,
            map,            
            icon: {
                url: './img/marker.png',
                labelOrigin: new google.maps.Point(30, -14),
            },                
            label: {                
                color: '#b40303',                
                text: 'Антоновка',
                fontWeight: 'bold',
                fontSize: '12px'               
            },            
        });
    }

    initMap();
})