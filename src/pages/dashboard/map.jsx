import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

export function MapPage() {
  return (
    <div className="mb-12 min-h-[calc(100vh-200px)] grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
      <div className="relative mt-5 col-span-4">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{
            height: "500px",
            width: "100%",
          }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]} icon={DefaultIcon}>
            <Popup>
              <PopUpElement />
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

function PopUpElement() {
  return (
    <div>
      <h1 className="text-lg font-semibold">London</h1>
      <p className="text-sm">Capital of England</p>
    </div>
  );
}
