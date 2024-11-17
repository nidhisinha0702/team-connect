import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import teamData from '../components/TeamData'; // Assuming teamData is in the same folder
 
// Coordinates for each hometown
const locations = {
    Patna: [25.5941, 85.1376],
    Chennai: [13.0827, 80.2707],
    Madhira: [17.5700, 80.3854],
    Hyderabad: [17.3850, 78.4867],
    Guntur: [16.3067, 80.4365],
    Kakinada: [16.9891, 82.2475],
    Vijayvada: [16.515099, 80.632095],
    Warangal:[17.967432, 79.588875]
};
 
function Map() {
    useEffect(() => {
        // Initialize the map
        const map = L.map('map').setView([20.5937, 78.9629], 5); // Center on India
 
        // Set up the OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

         // Add markers for each team member
         teamData.forEach(member => {
            const coords = locations[member.hometown];
            if (coords) {
                // Create a custom icon for the marker
                const customIcon = L.icon({
                    iconUrl: member.avatar, // Use the avatar image as the icon
                    iconSize: [40, 40], // Set size of the icon
                    iconAnchor: [20, 40], // Anchor the icon to the bottom-center
                    popupAnchor: [0, -40] // Adjust popup position
                });
 
                const marker = L.marker(coords, { icon: customIcon }).addTo(map);
 
                // Customize the popup content
                const popupContent = `
                    <div style="text-align: center;" className="member">
                        <strong>${member.name}</strong><br/>
                        <em>${member.interest}</em><br>
                        <em>${member.hometown}</em>
                    </div>
                `;
                marker.bindPopup(popupContent);
            }
        });
 
        // Cleanup function to remove the map on unmount
        return () => {
            map.remove();
        };
    }, []);
 
    return <div id="map" style={{ width: '100%', height: '500px' }}>Map Loading...</div>;
}
 
export default Map;