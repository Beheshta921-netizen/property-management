import "../styles/GlobalOffices.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

// Fix Leaflet marker icons in Vite
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",

  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",

  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});


function GlobalOffices() {

  const offices = [
    {
      city: "Islamabad",
      country: "Pakistan",
      address: "Blue Area, Islamabad",
      phone: "+92 300 1234567",
      position: [33.6844, 73.0479],
    },

    {
      city: "Dubai",
      country: "UAE",
      address: "Business Bay, Dubai",
      phone: "+971 50 1234567",
      position: [25.2048, 55.2708],
    },

    {
      city: "London",
      country: "United Kingdom",
      address: "Canary Wharf, London",
      phone: "+44 20 1234567",
      position: [51.5074, -0.1278],
    },

    {
      city: "New York",
      country: "USA",
      address: "Manhattan, New York",
      phone: "+1 212 1234567",
      position: [40.7128, -74.0060],
    },
  ];


  return (

    <div className="offices-page">


      {/* =========================
          HERO
      ========================= */}

      <section className="offices-hero">

        <h1>
          Global Offices
        </h1>

        <p>
          PropertyPro operates across multiple regions,
          connecting property professionals worldwide.
        </p>

      </section>



      {/* =========================
          OFFICE CARDS
      ========================= */}

      <section className="offices-section">

        <h2>
          Find Our Offices
        </h2>

        <div className="offices-grid">

          {offices.map((office, index) => (

            <div
              className="office-card"
              key={index}
            >

              <div className="office-icon">
                🌍
              </div>

              <h3>
                {office.city}
              </h3>

              <p>
                {office.country}
              </p>

              <p>
                📍 {office.address}
              </p>

              <p>
                ☎ {office.phone}
              </p>

            </div>

          ))}

        </div>

      </section>



      {/* =========================
          INTERACTIVE MAP
      ========================= */}

      <section className="map-section">

        <div className="map-heading">

          <span>
            OUR GLOBAL PRESENCE
          </span>

          <h2>
            Serving Customers Worldwide
          </h2>

          <p>
            Explore our global locations and discover
            where PropertyPro operates.
          </p>

        </div>


        <div className="map-wrapper">

          {/* Existing world map picture stays behind */}

          <div className="world-map-background"></div>


          {/* Working interactive map */}

          <MapContainer
            center={[30, 25]}
            zoom={2}
            scrollWheelZoom={true}
            className="interactive-map"
          >

            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            {offices.map((office, index) => (

              <Marker
                position={office.position}
                key={index}
              >

                <Popup>

                  <div className="map-popup">

                    <h3>
                      {office.city}
                    </h3>

                    <p>
                      {office.country}
                    </p>

                    <p>
                      📍 {office.address}
                    </p>

                    <p>
                      ☎ {office.phone}
                    </p>

                  </div>

                </Popup>

              </Marker>

            ))}

          </MapContainer>

        </div>

      </section>


    </div>
  );
}


export default GlobalOffices;