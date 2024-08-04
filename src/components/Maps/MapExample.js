import React, { useEffect, useRef } from "react";

function MapExample() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const google = window.google;
      const mapElement = mapRef.current;
      const bounds = new google.maps.LatLngBounds();

      // Define Kilimani region bounds (Adjust as necessary)
      const kilimaniBounds = [
        { lat: -1.308, lng: 36.780 }, // SW corner
        { lat: -1.290, lng: 36.795 }, // NE corner
      ];

      const mapOptions = {
        zoom: 15,
        center: { lat: -1.2921, lng: 36.7824 },
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#4299e1" }, { visibility: "on" }],
          },
        ],
      };

      const map = new google.maps.Map(mapElement, mapOptions);

      const markerColors = [
        "black", "red", "green", "blue", "yellow", "purple"
      ];

      const markers = [
        { position: { lat: -1.281, lng: 36.7824 }, title: "Kilimani Center", color: markerColors[0] },
        { position: { lat: -1.301, lng: 36.7844 }, title: "Kilimani Market", color: markerColors[1] },
        { position: { lat: -1.2941, lng: 36.7804 }, title: "Kilimani Park", color: markerColors[2] },
        { position: { lat: -1.3071, lng: 36.7854 }, title: "Kilimani Plaza", color: markerColors[3] },
        { position: { lat: -1.2971, lng: 36.7854 }, title: "Laura's Spot", color: markerColors[0] },
        { position: { lat: -1.2924347790942499, lng: 36.78608966441781 }, title: "New Location 1", color: markerColors[1] },
        { position: { lat: -1.2917938941563343, lng: 36.78571951958826 }, title: "New Location 2", color: markerColors[4] },
        { position: { lat: -1.2941360193693, lng: 36.79531300000001 }, title: "New Location 3", color: markerColors[3] },
        { position: { lat: -1.2905582057604144, lng: 36.78285988465744 }, title: "New Location 4", color: markerColors[3] },
        { position: { lat: -1.2942643627915973, lng: 36.78721421349309 }, title: "New Location 5", color: markerColors[1] },
        { position: { lat: -1.290391661300067, lng: 36.78979557805256 }, title: "New Location 6", color: markerColors[2] },
        { position: { lat: -1.2935, lng: 36.7835 }, title: "Yellow Flag Location", color: markerColors[4] },
        { position: { lat: -1.289, lng: 36.790 }, title: "Purple Flag Location", color: markerColors[5] } // Added purple flag location
      ];

      markers.forEach((markerData) => {
        const marker = new google.maps.Marker({
          position: markerData.position,
          map: map,
          animation: google.maps.Animation.DROP,
          title: markerData.title,
          icon: {
            url: markerData.color === "yellow"
              ? "http://maps.google.com/mapfiles/kml/shapes/flag.png" // Yellow flag icon URL
              : markerData.color === "purple"
              ? "http://maps.google.com/mapfiles/ms/icons/purple-dot.png" // Purple flag icon URL
              : `http://maps.google.com/mapfiles/ms/icons/${markerData.color}-dot.png`
          }
        });

        const infowindow = new google.maps.InfoWindow({
          content: `<div class="info-window-content"><h2>${markerData.title}</h2></div>`,
        });

        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });

        bounds.extend(marker.position);
      });

      // Adjust the map to fit all markers within the Kilimani bounds
      map.fitBounds(bounds);
    };

    if (window.google) {
      loadMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
      script.async = true;
      script.defer = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <div className="relative w-full rounded h-600-px">
        <div className="rounded h-full" ref={mapRef} />
      </div>
      <div className="p-4 bg-white text-gray-800 border-t border-gray-300">
        <h3 className="text-lg font-semibold">Legend:</h3>
        <ul className="list-disc list-inside mt-2">
          <li><span className="inline-block w-4 h-4 bg-black"></span> Purple: Blackout</li>
          <li><span className="inline-block w-4 h-4 bg-red-500"></span> Red: Noise Pollution</li>
          <li><span className="inline-block w-4 h-4 bg-green-500"></span> Green: Waste Management</li>
          <li><span className="inline-block w-4 h-4 bg-blue-500"></span> Blue: Water Shortage</li>
          <li><span className="inline-block w-4 h-4 bg-yellow-500"></span> Big Flag: Shows all problems at once</li>

        </ul>
      </div>
    </>
  );
}

export default MapExample;
