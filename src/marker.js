import mapboxgl from "mapbox-gl";

const iconURLs = {
  hotel: "http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png",
  activity: "http://i.imgur.com/WbMOfMl.png"
};

function buildMarker(type, coord) {
  // whatever to build it
  const newMarker = document.createElement('div')
  newMarker.style.width = '32px'
  newMarker.style.height = '39px'
  newMarker.style.backgroundImage = `url(${iconURLs[type]})`
  let newMarks = new mapboxgl.Marker(newMarker).setLngLat(coord)
  return newMarks
}

export default buildMarker
