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

const geocodersearch = L.Control.Geocoder.nominatim();

// Add a click event listener to the geocoder
let currentMarker;

const search = document.querySelector(".btn").addEventListener("click", () => {
  const searchInput = document.querySelector("#search").value;
  if (searchInput) {
    geocodersearch.geocode(searchInput, (results) => {
      if (results.length > 0) {
        const result = results[0];
        map.setView(result.center, 13);
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
