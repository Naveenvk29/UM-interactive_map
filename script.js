const map = L.map("map").setView([20.5937, 78.9629], 5);

const titleUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & coder by Naveen Vinod Kumar with ❤️ ';

const tiles = L.tileLayer(titleUrl, { attribution });

const smoothDark = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}",
  {
    ext: "png",
  }
);

const googleStreets = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
).addTo(map);

const googleHybrid = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

const googleSat = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
const layers = {
  "Google Streets": googleStreets,
  OpenStreetMap: tiles,
  "Dark Mode": smoothDark,
  "Google Hybrid": googleHybrid,
  "Google Satellite": googleSat,
};
const layerControl = L.control
  .layers(layers, null, {
    backgroundColor: "#000",
  })
  .addTo(map);

function currentllocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Set map view to current location
        map.setView([lat, lon], 13);

        // Add marker to the current location
        const marker = L.marker([lat, lon]).addTo(map);
        marker.openPopup();
      },
      (error) => {
        console.error("Error getting location: ", error);
        alert("Unable to retrieve your location.");
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}
currentllocation();

const geocodersearch = L.Control.Geocoder.nominatim();

// Add a click event listener to the geocoder
let currentMarker;

const search = document.querySelector(".btn").addEventListener("click", () => {
  const searchInput = document.querySelector("#search").value;
  if (searchInput) {
    geocodersearch.geocode(searchInput, (results) => {
      if (results.length > 0) {
        const result = results[0]; // This defines 'result'
        map.setView(result.center, 13); // This is where the error happens
        if (currentMarker) {
          map.removeLayer(currentMarker);
        }
        currentMarker = L.marker(result.center)
          .addTo(map)
          .bindPopup(
            `
            <div>
              <h4>${result.name}</h4>
              <p>Loading image...</p>
            </div>
          `
          )
          .openPopup();
        getPlaceImage(result.name);
      } else {
        alert("Location not found.");
      }
    });
  }
});
function getPlaceImage(placeName) {
  var unsplashAPIKey = "54Z2Q6HWt_jS6B3r_gXvzeOCZPxiy2JEHkQIgWoUC98";
  var url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    placeName
  )}&client_id=${unsplashAPIKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const imageUrl = data.results[randomIndex].urls.regular; // Get the regular-sized image URL

        // Update the popup content to include the image
        if (currentMarker) {
          currentMarker.setPopupContent(`
          
              <h4>${placeName}</h4>
              <img src="${imageUrl}" alt="${placeName}" >
            
          `);
          currentMarker.openPopup();
        }
      } else {
        console.log("No images found for this location");
        if (currentMarker) {
          currentMarker.setPopupContent(`
            <div>
              <h4>${placeName}</h4>
              <p>No images found.</p>
            </div>
          `);
          currentMarker.openPopup();
        }
      }
    })
    .catch((error) => {
      console.error("Error fetching image:", error);
      if (currentMarker) {
        currentMarker.setPopupContent(`
          <div>
            <h4>${placeName}</h4>
            <p>Error loading image.</p>
          </div>
        `);
        currentMarker.openPopup();
      }
    });
}

const flytoPlace = (place) => {
  const lat = place.geometry.coordinates[1];
  const lng = place.geometry.coordinates[0];
  map.flyTo([lat, lng], 14, {
    animate: true,
    duration: 3,
  });
  setTimeout(() => {
    L.popup({ closeButton: false, offset: L.point(0, -8) })
      .setLatLng([lat, lng])
      .setContent(makePopupContent(place))
      .openOn(map);
  }, 1000);
};

const MyIcon = L.icon({
  iconUrl: "images/marker.png",
  iconSize: [25, 25],
  iconAnchor: [12, 15],
});

function makePopupContent(Feature) {
  return `
      <div>
      <img src="${Feature.properties.image}" alt="${Feature.properties.name}" />
        <h4>${Feature.properties.name}</h4>
        <p>${Feature.properties.description}</p>

      </div>
      `;
}
// places
const placesList = function () {
  const ul = document.querySelector(".list");
  places.forEach((place) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const a = document.createElement("a");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    a.addEventListener("click", () => {
      flytoPlace(place);
    });

    div.classList.add("place");
    a.innerHTML = place.properties.name;
    a.href = "#";

    p1.innerText = place.properties.address;
    p2.innerHTML = place.geometry.coordinates;

    div.appendChild(a);
    div.appendChild(p1);
    div.appendChild(p2);
    li.appendChild(div);
    ul.appendChild(li);
  });
};

placesList();

const placesLayer = L.geoJSON(places, {
  onEachFeature: (Feature, layer) => {
    layer.bindPopup(makePopupContent(Feature), {
      closeButton: false,
    });
  },
  pointToLayer: (Feature, latlng) => {
    return L.marker(latlng, {
      icon: MyIcon,
    });
  },
}).addTo(map);
