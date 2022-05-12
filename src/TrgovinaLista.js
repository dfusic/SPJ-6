import React from "react";
import artikli from './aritkli.json';
import TrgovinaArtikla from "./TrgovinaArtikla";

function TrgovinaLista()
{
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Naziv</th>
                        <th scope="col">Proizvodac</th>
                        <th scope="col">Model</th>
                        <th scope="col">Cijena</th>
                        <th scope="col">Kolicina</th>

                    </tr>
                </thead>
                <tbody>
                    {artikli.map(artikl => {return(
                        <TrgovinaArtikla key={artikl.id.toString()} artikl={artikl}/>
                    )})}
                </tbody>
            </table>
        </div>
    )
}
export default TrgovinaLista
