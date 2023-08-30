import "leaflet/dist/leaflet.css";
import { FC } from "react";
import { useQuery } from "react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import mapImage from "../assets/map.png";

const Map: FC = () => {
  const { isLoading, data } = useQuery(
    "country-case",
    () =>
      fetch("https://disease.sh/v3/covid-19/countries").then((res) =>
        res.json()
      ),
    {
      refetchOnWindowFocus: false,
      cacheTime : 3000
    }
  );

  let markers: any = [];
  if (!isLoading) {
    const getMapData = (data: any) => {
      const mapData = data.map((ele: any) => {
        return {
          id: Math.random().toString(),
          country: ele.country,
          lat: ele.countryInfo.lat,
          lng: ele.countryInfo.long,
          active: ele.active,
          deaths: ele.deaths,
          recovered: ele.recovered,
        };
      });

      return mapData;
    };
    const map = getMapData(data);
    const getMarker = () => {
      const markerData = map.map((ele: any) => {
        return {
          id: ele.id,
          geocode: { lat: ele.lat, lng: ele.lng },
          popUp: `${ele.country}\nactive:${ele.active},deaths:${ele.deaths},recovered:${ele.recovered}`,
        };
      });
      return markerData;
    };
    const arr = getMarker();

    markers = [...arr];
  }

  const markIcon = new Icon({
    iconUrl: mapImage,
    iconSize: [38, 38],
  });

  const position = { lat: 33, lng: 65 };

  return (
    <div className="mt-20 w-[700px] h-[700px] m-auto">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker: any) => {
          return (
            <Marker key={marker.id} position={marker.geocode} icon={markIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
