import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapServices } from "src/services/MapServices";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import LoadComponent from "src/widgets/load";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

export function MapPage() {
  const mapServices = new MapServices();

  const [companies, setCompaines] = useState([]);
  const [company, setCompany] = useState({});

  const [positions, setPositions] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const res = await mapServices.getCompanies();

    setCompaines(res);

    console.log(res);

    setLoading(false);
  }

  if (loading)
    return (
      <div className="h-screen w-full">
        <LoadComponent />
      </div>
    );

  return (
    <div className="mb-12 min-h-[calc(100vh-200px)] grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
      <div className="mt-5 col-span-4">
        <MapContainer
          center={[-6.175392, 106.827153]}
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
          {companies.map((item, index) => {
            return (
              <Marker
                position={[item.latitude, item.longitude]}
                icon={DefaultIcon}
                key={index}
              >
                <Popup>
                  <PopUpElement data={item} />
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}

function PopUpElement({ data }) {
  return (
    <Card key={data.id} color="transparent" shadow={false}>
      <CardHeader
        floated={false}
        color="gray"
        className="mx-0 mt-0 mb-4 h-64 xl:h-40"
      >
        <img
          src={data.images[0].url}
          alt={data.name}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="py-0 px-1">
        <Typography variant="small" className="font-normal text-blue-gray-500">
          {data.typeIntern} | {data.typeActivity}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mt-1 mb-2">
          {data.name}
        </Typography>
        <Typography
          variant="small"
          className="font-normal text-blue-gray-500 text-justify"
        >
          {data.description}
        </Typography>
        <Typography variant="small" className="font-normal text-blue-gray-500">
          Location: {data.City.name}
        </Typography>
      </CardBody>
    </Card>
  );
}
