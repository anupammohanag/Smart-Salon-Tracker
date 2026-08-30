const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

const coords = [
  { lat: 40.7128, lng: -74.0060 }, // Downtown
  { lat: 40.7150, lng: -73.9950 }, // Midtown
  { lat: 40.7200, lng: -74.0100 }, // Westside
  { lat: 40.7100, lng: -73.9900 }, // East End
  { lat: 40.7300, lng: -74.0200 }, // Northpoint
  { lat: 40.7180, lng: -73.9980 }, // Arts District
  { lat: 40.7110, lng: -74.0080 }, // Old Town
  { lat: 40.7250, lng: -73.9900 }, // Uptown
  { lat: 40.7190, lng: -74.0020 }, // Village Green
  { lat: 40.7050, lng: -74.0150 }  // Financial District
];

let index = 0;
content = content.replace(/distance: ([\d.]+),/g, (match, p1) => {
  if (index >= coords.length) return match;
  let lat = coords[index].lat;
  let lng = coords[index].lng;
  index++;
  return `distance: ${p1},\n    lat: ${lat},\n    lng: ${lng},`;
});

fs.writeFileSync('app.js', content);
