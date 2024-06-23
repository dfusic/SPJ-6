import artikli from './aritkli.json';
import React from 'react';

const TrgovinaArtikla = (props) => (
    <>
        <tr>
            <td scope='row'>{props.artikl.id}</td>
            <td>{props.artikl.naziv}</td>
            <td>{props.artikl.proizvodac}</td>
            <td>{props.artikl.model}</td>
            <td>{props.artikl.cijena}</td>
            <td>{(props.artikl.kolicina > 0) ? <KosaricaArtikl kolicina={props.artikl.kolicina} /> : <UpitArtikla kolicina={props.artikl.kolicina} />}</td>
        </tr>
    </>
)

const UpitArtikla = (props) => {
    const prikaziUpit = () => {
        alert("Artikl nije dostupan");
    }
    return <button className='btn btn-primary' onClick={prikaziUpit}>Posalji upit</button>
}

const KosaricaArtikl = () => {
    const prikaziDostupne = () => alert("Dostupno je:" + kolicina)
    return (<button className='btn btn-success' onClick={() => prikaziDostupne(props.kolicina)}>Kosarica</button>)
}

export default TrgovinaArtikla