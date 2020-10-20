let map;

function initMap() {    

        let zoom = 13;
        let screenWidth = document.documentElement.clientWidth;
        let center = { lat: 46.668713, lng: 32.632895 };    
        let markerCenter = { lat: 46.667726, lng: 32.689785 };
        const root = document.getElementById("map");

        if (screenWidth < 991) {
            center = { lat: 46.671726, lng: 32.689785 };
            zoom = 15;
            markerCenter = { lat: 46.669726, lng: 32.689785 };
        }

        console.log(screenWidth);
        console.log(zoom);

        let options = {
            center,
            zoom        
        }   
    
        map = new google.maps.Map(root, options); 
    
        new google.maps.Marker({
            position: markerCenter,
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
};  

initMap();


