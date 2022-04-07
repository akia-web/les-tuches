import { Service } from "../api/RequestServiceApi";
import { useEffect, useState } from "react";
const Map = () => {
  const [pageNumber, setPageNumber] = useState(1);
  let [data, setData] = useState(null);
  let [reload, setReload] = useState(true);
  useEffect(() => {
    Service(pageNumber).then((r) => {
      setData(r);
      console.log(data);
    });
  }, []);
  return (
    <div>
      {reload ? (
        <div>
          {data
            ? data.map((character) => (
                <div key={character.url}>
                  <img src={character.images.jpg.image_url} />;
                  <h2>{character.name}</h2>
                </div>
              ))
            : null}
        </div>
      ) : null}

      <button
        onClick={async () => {
          setPageNumber(pageNumber + 1);
          await Service(pageNumber).then((r) => {
            r.map((index) => {
              data.push(index);
            });
            setReload(false);
            setReload(true);
            console.log(data);
          });
          console.log(pageNumber + "bon");
        }}
      >
        afficher plus
      </button>
    </div>
  );
};

export default Map;
