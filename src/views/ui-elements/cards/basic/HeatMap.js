// beta version


import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer-v3';
import 'leaflet/dist/leaflet.css';

const mapCenter = [51.08852, -114.15145];

const HeatMap = () => {
  const [time, setTime] = useState(0.5);
  const [filteredHeatmapData, setFilteredHeatmapData] = useState([]);

  const heatmapData = [
    { lat: 51.08852, lng: -114.15145, time: 0.5 },
    { lat: 51.08852, lng: -114.15145, time: 0.5 },
    { lat: 51.08852, lng: -114.15145, time: 0.5 },
    { lat: 51.08852, lng: -114.15145, time: 0.5 },
    { lat: 51.088192, lng: -114.152038, time: 0.5 },
    { lat: 51.088192, lng: -114.152038, time: 0.5 },
    { lat: 51.088192, lng: -114.152038, time: 1 },
    { lat: 51.088192, lng: -114.152038, time: 1 },
    // Add more heatmap data points as needed
  ];

  useEffect(() => {
    // Filter the heatmap data based on the selected time
    const filteredData = heatmapData.filter((point) => point.time === time);
    setFilteredHeatmapData(filteredData);
  }, [time]);

  const handleTimeChange = (event) => {
    setTime(parseFloat(event.target.value));
  };

  return (
    <>
      <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <HeatmapLayer
          fitBoundsOnLoad
          fitBoundsOnUpdate
          points={filteredHeatmapData}
          longitudeExtractor={(point) => point.lng}
          latitudeExtractor={(point) => point.lat}
          intensityExtractor={() => 0.5} // Keep intensity constant for all filtered data points
        />
      </MapContainer>
      <div>
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={time}
          onChange={handleTimeChange}
        />
        <span>{time}</span>
      </div>
    </>
  );
};

export default HeatMap;



// latest stable version

// import React from 'react';
// import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
// // import HeatmapLayer from 'react-leaflet-heatmap-layer';
// // import HeatmapLayer from './src/HeatmapLayer';
// import HeatmapLayer from 'react-leaflet-heatmap-layer-v3'


// import 'leaflet/dist/leaflet.css';


// const mapCenter = [51.08852,-114.15145]

// const HeatMap = () => {

//     const heatmapData = [
//         [51.08852,-114.15145, 0.5], // [latitude, longitude, intensity]
//         [51.08852,-114.15145, 0.5],
//         [51.08852,-114.15145, 0.5],
//         [51.08852,-114.15145, 0.5],
//         [51.088192, -114.152038, 0.5],
//         [51.088192, -114.152038, 0.5],
//         // Add more heatmap data points as needed
//     ];

//     return(
//         <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }} >
//             <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <HeatmapLayer
//                 fitBoundsOnLoad
//                 fitBoundsOnUpdate
//                 points={heatmapData}
//                 longitudeExtractor={(point) => point[1]}
//                 latitudeExtractor={(point) => point[0]}
//                 intensityExtractor={(point) => point[2]}
//             />
//             {/* <Marker position={mapCenter}>
//                 <Popup>
//                     Yea it's my home. <br /> I miss my desktop.
//                 </Popup>
//             </Marker> */}
//         </MapContainer>
//     )

// }
// export default HeatMap;