'use client';
import React, { useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function GMap() {
    useEffect(() => {
        const mapContainer = document.getElementById('map');

        if (mapContainer && !(mapContainer as unknown as { _leaflet_id: string })._leaflet_id) {
            const map = leaflet.map(mapContainer).setView([40.7128, -74.0060], 12);

            leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            const marker = leaflet.marker([40.7128, -74.0060]).addTo(map);
            marker.bindPopup("<div style='text-align: center;'><b style='color: #FE6A28;'>HERISTAYS</b><br>Business Park Theale C1, Center Berkshire RS1 5A1 England</div>").openPopup();
        }

        return () => {
            if (mapContainer && (mapContainer as unknown as { _leaflet_id: string })._leaflet_id) {
                const mapInstance = leaflet.map(mapContainer);
                mapInstance.remove();
            }
        };
    }, []);

    return <div id="map" className={'h-[250px] w-full'}></div>;
}
