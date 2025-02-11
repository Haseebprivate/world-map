import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      onClick={() => {
        navigate("form");
      }}
      className={styles.mapContainer}
    >
      <h1>map</h1>
      <p>{lat}</p>
      <p>{lng}</p>
      <button
        onClick={(event) => {
          event.stopPropagation();
          setSearchParams({ lat: 23, lng: 11 });
        }}
      >
        change URL
      </button>
    </div>
  );
}

export default Map;
