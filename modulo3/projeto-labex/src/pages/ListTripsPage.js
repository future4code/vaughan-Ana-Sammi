import react from 'react'
import axios from 'axios'
import {CardTrip} from '../constants/style'

export default function ListTripsPage() {
    return (
        <div>
           <h2>Lista de viagens</h2>
           <CardTrip>
                viagem para a lua
           </CardTrip>
           <button>Inscrever-se para uma viagem</button>
        </div>
    )
}