import { requestApi } from "../api/requestApi"
import {useEffect} from "react"
const Salut = () => {
    useEffect(() => {
        requestApi()
    }, []) 
  return <div>Salut</div>;
};

export default Salut;
