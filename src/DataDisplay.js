import React from 'react'
import Votos from './votos.json'
 function DataDisplay(){
    const DisplayData=Votos.map(
        (game)=>{
            return(
                <tr>
                    <td>{game.Jugador}</td>
                    <td>{game.Votos.Larreta}</td>
                    <td>{game.Votos.Bullrich}</td>
                    <td>{game.Votos.Massa}</td>
                    <td>{game.Votos.Grabois}</td>
                    <td>{game.Votos.Milei}</td>
                    <td>{game.Votos.FIT}</td>
                    <td>{game.Votos.Otros}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Jugador</th>
                    <th>Larreta</th>
                    <th>Bullrich</th>
                    <th>Massa</th>
                    <th>Grabois</th>
                    <th>Milei</th>
                    <th>FIT</th>
                    <th>Otros</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default DataDisplay;