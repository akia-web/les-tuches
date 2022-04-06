import {Service} from "../api/RequestServiceApi"
import {useEffect, useState} from "react"
const Map = () => {
    let [data, setData] = useState(null);
    useEffect(() => {
        Service().then(r => {
            setData(r);
            console.log(data)
        });
        
    }, [])
    return <div>{data ? <div>{data[1].mal_id}</div> : null }</div>;
};

export default Map;
