import react from 'react'

export default function TripDetailsPage() {
    return (
        <div>
            <h2>Nome da viagem</h2>
            <div>
                descrição da viagem
            </div>
            <div>
               card de candidatos pendentes
               <button>aprovar</button>
               <button>reprovar</button>
            </div>
            <h4>Candidatos aprovados</h4>
            <ul>
                <li>nome dos aprovados</li>
            </ul>
            <button>logout</button>
            <button>Card de cada viagem</button>
        </div>
    )
}