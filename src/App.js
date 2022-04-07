import './Reset.css';
import './App.css';
import {useEffect, useState} from "react";
import {requestServiceApi} from "./api/RequestServiceApi";
import BasicCard from "./components/basicCard";

function App() {

    const [caracters, setCaracters] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    useEffect(() => {
        requestServiceApi(pageNumber).then((r) => {
            let tempoArray = caracters;
            r.data.forEach((value) => {
                tempoArray.push(value);
            })
            setCaracters(tempoArray);
            setMaxPage(r.pagination.last_visible_page);
        });
    }, [pageNumber])

    function loadNextPage(value) {
        if (value + 1 <= maxPage)
            setPageNumber(pageNumber + 1);
    }

    return (
        <div className="App">
            <div className={'wrapper'}>
                {
                    caracters ?
                    Array.from(caracters.entries(), ([key, caracter]) =>
                    {
                        caracter.id = key + 1;
                        return <BasicCard key={key} caracter={caracter}/>
                    }
                    ) : null
                }
            </div>
            {
                pageNumber + 1 <= maxPage && <button onClick={() => {
                    loadNextPage(pageNumber)
                }}>Load 25 more</button>
            }
        </div>
    );
}

export default App;
