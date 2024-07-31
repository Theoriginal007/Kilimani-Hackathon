import React, { useEffect, useRef } from "react";

function MapExample() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const google = window.google;
      const mapElement = mapRef.current;
      const lat = -1.2921;
      const lng = 36.7824;
      const myLatlng = new google.maps.LatLng(lat, lng);

      const mapOptions = {
        zoom: 14,
        center: myLatlng,
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

      const markers = [
        { position: { lat: -1.281, lng: 36.7824 }, title: "Kilimani Center" },
        { position: { lat: -1.301, lng: 36.7844 }, title: "Kilimani Market" },
        { position: { lat: -1.2941, lng: 36.7804 }, title: "Kilimani Park" },
        { position: { lat: -1.3071, lng: 36.7854 }, title: "Kilimani Plaza" },
        { position: { lat: -1.281, lng: 36.7824 }, title: "Kilimani Center" },
        { position: { lat: -1.301, lng: 36.7844 }, title: "Kilimani Market" },
        { position: { lat: -1.2941, lng: 36.7804 }, title: "Kilimani Park" },
        { position: { lat: -1.3071, lng: 36.7854 }, title: "Kilimani Plaza" },
      ];

      markers.forEach((markerData) => {
        const marker = new google.maps.Marker({
          position: markerData.position,
          map: map,
          animation: google.maps.Animation.DROP,
          title: markerData.title,
        });

        const infowindow = new google.maps.InfoWindow({
          content: `<div class="info-window-content"><h2>${markerData.title}</h2></div>`,
        });

        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
      });
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
    <div className="relative w-full rounded h-600-px" style={{marginTop: "120px", marginLeft: "120px"}}>
     a table of lands parcels
    </div>
    </>
  );
}

export default MapExample;
