const map = L.map("map").setView([20.5937, 78.9629], 5);

const titleUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & coder by Naveen Vinod Kumar with ❤️ ';

const tiles = L.tileLayer(titleUrl, { attribution }).addTo(map);

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
);

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

// Define the layers object
const layers = {
  OpenStreetMap: tiles,
  "Dark Mode": smoothDark,
  "Google Streets": googleStreets,
  "Google Hybrid": googleHybrid,
  "Google Satellite": googleSat,
};
const layerControl = L.control
  .layers(layers, null, {
    position: "bottomleft",
    textSize: "large",
  })
  .addTo(map);
