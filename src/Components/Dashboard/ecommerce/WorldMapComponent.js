import React, { useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 

const WorldMapComponent = () => {
  const mapRef = useRef();

  const handleZoomIn = () => {
    const map = mapRef.current;
    if (map != null) {
      map.setZoom(map.getZoom() + 1);
    }
  };

  const handleZoomOut = () => {
    const map = mapRef.current;
    if (map != null) {
      map.setZoom(map.getZoom() - 1);
    }
  };

  return (
    <div className="map-container">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: '440px', width: '100%' }}
        whenCreated={(mapInstance) => { mapRef.current = mapInstance }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <div className="zoom-controls">
        <button className="zoom-button" onClick={handleZoomIn}>Zoom In</button>
        <button className="zoom-button" onClick={handleZoomOut}>Zoom Out</button>
      </div>
    </div>
  );
};

export default WorldMapComponent;
