import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps"

export default function Map(withGoogleMap(Map)) {
  return (
    <>
      <div className="map">
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        ></GoogleMap>
      </div>
    </>
  );
}
