import mapboxgl from "mapbox-gl";
import buildMarker from "./marker"

mapboxgl.accessToken = 'pk.eyJ1IjoiY2h0YWthaGFzaGkiLCJhIjoiY2tkeXBhOHI0MTEzdjJzbndkZnc1aDltZyJ9.Tk-PJa7rwwVDClWMsRRodQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const newMarker = document.createElement('div')
newMarker.style.width = '32px'
newMarker.style.height = '39px'
newMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
new mapboxgl.Marker(newMarker).setLngLat([-74.009, 40.705]).addTo(map)

// buildMarker()
