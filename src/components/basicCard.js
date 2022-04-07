import './styles/basicCard.css';

export default function BasicCard(caracter) {
    caracter = caracter.caracter;

    return (
            <div className={'card'}>
                <a href={caracter.url} target={'_blank'}>
                    <h2>{caracter.name}</h2>
                    <p>{caracter.name_kanji}</p>
                    <img src={caracter.images.jpg.image_url}
                         alt="artwork"/>
                    <ul className={'nicknames'}>
                        {caracter.nicknames.map((nickname) => {
                            return (<li key={nickname}> {nickname} </li>);
                        })}
                    </ul>
                </a>
            </div>
    )
}
