let map;
let virtualMarker;

function initMap() {
    map = L.map('map').setView([51.505, -0.09], 13); // 初始地图中心和缩放级别

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // 点击地图时更新标记位置
    map.on('click', function(e) {
        setMarker(e.latlng.lat, e.latlng.lng);
    });
}

function setMarker(lat, lng) {
    if (virtualMarker) {
        virtualMarker.setLatLng([lat, lng]).update();
    } else {
        virtualMarker = L.marker([lat, lng]).addTo(map);
    }
    updateInputFields(lat, lng);
}

function setVirtualLocation() {
    const lat = document.getElementById('latitude').value;
    const lng = document.getElementById('longitude').value;
    if (lat && lng) {
        setMarker(lat, lng);
        map.setView([lat, lng], 13);
    }
}

function updateInputFields(lat, lng) {
    document.getElementById('latitude').value = lat;
    document.getElementById('longitude').value = lng;
}

window.onload = initMap;
