
// 1. Checking Geolocation Availability:
if ('geolocation' in navigator) {
    alert('Geolocation Available');
    
    // 2. Getting the Current Position:
    navigator.geolocation.getCurrentPosition(async position => {
        
        // 3. Extracting Latitude and Longitude:
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // 4. Displaying Latitude and Longitude:
        document.getElementById('latitude').textContent = lat;
        document.getElementById('longitude').textContent = lon;
        
        // 5. Setting Up a Leaflet Map: 
        let map = L.map('map').setView([49.2827, -123.1207], 13.5);

        // 6. Placing a Marker on the Map:
        let marker = L.marker([lat, lon]).addTo(map);
        marker.bindPopup("<b>Hey!</b><br>We are here").openPopup();

        // 7. Adding a Tile Layer to the Map:
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);
    });

// 8. Handling Geolocation Unavailability:
} else {
    alert('Geolocation Not Available');
}