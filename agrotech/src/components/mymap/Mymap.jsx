import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';

function Mymap() {
  const [status, setStatus] = useState('');
  const [map, setMap] = useState(null);
  const [location, setLocation] = useState(null);
  const [nearestTown, setNearestTown] = useState('');

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Reverse geocoding request to OpenStreetMap Nominatim
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
      .then((response) => response.json())
      .then((data) => {
        const town = data.address.city || data.address.town || data.address.village;

        const locationString = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
        setLocation(locationString);
        setNearestTown(town);

        setStatus('');
        const map = L.map('map').setView([latitude, longitude], 18);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map)
          .bindPopup(`Location: ${town}`)
          .openPopup();

        setMap(map);
      })
      .catch((error) => {
        console.error('Error fetching reverse geocoding data:', error);
        setStatus('Error retrieving location information');
      });
  };

  const error = () => {
    setStatus('Unable to retrieve your location');
  };

  const geoFindMe = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating…');
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.querySelector('#find-me').addEventListener('click', geoFindMe);

    // Remove event listener when the component unmounts
    return () => {
      document.querySelector('#find-me').removeEventListener('click', geoFindMe);
    };
  }, []);

  return (
    <div>
      <p id="status">{status}</p>
      <div id="map" style={{ width: '300px', height: '300px'}}></div>
      <button id="find-me" className='text-green-800'>Find Me</button>
      {location && <h1>Location: {location}</h1>}
      {nearestTown && <h1>Nearest Town: {nearestTown}</h1>}
    </div>
  );
}

export default Mymap;
