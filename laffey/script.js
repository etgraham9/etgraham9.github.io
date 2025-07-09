const map = L.map('map', {
  center: [20, 0],
  zoom: 2,
  zoomControl: false,
  dragging: false,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  boxZoom: false,
  keyboard: false,
  tap: false,
  touchZoom: false
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const sections = document.querySelectorAll(".section");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { lat, lng, zoom } = entry.target.dataset;
        map.flyTo([lat, lng], zoom, {
          duration: 2
        });
      }
    });
  },
  {
    threshold: 0.5
  }
);

sections.forEach(section => observer.observe(section));

