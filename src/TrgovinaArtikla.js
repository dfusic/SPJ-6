import artikli from './aritkli.json';
import React from 'react';

function TrgovinaArtikla(props)
{
    return(
    <>
    <tr>
    <td scope='row'>{props.artikl.id}</td>
    <td>{props.artikl.naziv}</td>
    <td>{props.artikl.proizvodac}</td>
    <td>{props.artikl.model}</td>
    <td>{props.artikl.cijena}</td>
    <td>{(props.artikl.kolicina > 0) ? <KosaricaArtikl kolicina={props.artikl.kolicina}/>:<UpitArtikla kolicina={props.artikl.kolicina}/>}</td>
    </tr> 
    </>
    )
}
function UpitArtikla(props)
{
    return(
        <button className='btn btn-primary' onClick={PrikaziUpit}>Posalji upit</button>
    )
}
function PrikaziUpit()
{
    alert("Artikl nije dostupan")
}
function KosaricaArtikl(props)
{
    return(
        <button className='btn btn-success' onClick={()=> PrikaziDostupne(props.kolicina)}>Kosarica</button>
    )
}
function PrikaziDostupne(kolicina)
{
    alert("Dostupno je:" + kolicina)
}
export default TrgovinaArtikla