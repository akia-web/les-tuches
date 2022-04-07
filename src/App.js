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
            console.log('tempoArray : ', tempoArray);
            r.data.forEach((value) => {
                tempoArray.push(value);
            })
            console.log('caracters : ', caracters);
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
                    caracters ? caracters.map((caracter => {
                        return <BasicCard key={caracter.mal_id} caracter={caracter}/>
                    })) : null
                }
            </div>
            {
                pageNumber + 1 <= maxPage && <button onClick={() => {loadNextPage(pageNumber)}}>Load more</button>
            }
        </div>
    );
}

export default App;
