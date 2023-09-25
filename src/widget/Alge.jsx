import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet library
import 'leaflet/dist/leaflet.css';

function getRandomCoordinate(min, max) {
  return Math.random() * (max - min) + min;
}

function AlgeriaMap() {
  const [mark,setMark] = useState(false);
  const [markerPositions, setMarkerPositions] = useState([]); 
 useEffect(() => {
    // Define a smaller bounding box for Blida, Algeria
    const boundingBox = {
      minLatitude: 36.4614,
      maxLatitude: 36.4814,
      minLongitude: 2.8087,
      maxLongitude: 2.8287,
    };

    // Generate an array of unique marker positions within the smaller bounding box
    const positions = [];

    while (positions.length < 5) {
      const latitude = getRandomCoordinate(
        boundingBox.minLatitude,
        boundingBox.maxLatitude
      );
      const longitude = getRandomCoordinate(
        boundingBox.minLongitude,
        boundingBox.maxLongitude
      );
      positions.push([latitude, longitude]);
    }

    setMarkerPositions(positions);
  }, []);

  // Define a custom circular icon for the marker
  const customIcon = new L.divIcon({
    className: 'custom-icon',
    html: '<div class="circle"></div>',
  });

  useEffect(() => {
    // Move each marker slowly using setInterval
    const markerInterval = setInterval(() => {
      setMarkerPositions((prevPositions) => {
        return prevPositions.map((position) => {
          const latitude = position[0] + (Math.random() ) * 0.0001; // Adjust the speed by changing the value
          const longitude = position[1] + (Math.random() ) * 0.0001; // Adjust the speed by changing the value
          return [latitude, longitude];
        });
      });
    }, 500); // Adjust the interval (milliseconds) for slower or faster movement

    return () => {
      clearInterval(markerInterval); // Clear the interval on component unmount
    };
  }, []);

  return (
    <div className="map-container">
      <MapContainer
        id='tutu'
        center={[36.4714, 2.8187]}
        zoom={10}
        zoomControl={false}
        style={{ height: '920px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://carto.com">CARTO</a> | &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />

        {/* Render a Marker component for each position */}
        {markerPositions.map((position, index) => (
          <Marker  key={index} position={position} icon={customIcon}>
            <Popup >Random Location in Blida, Algeria</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default AlgeriaMap;