import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 400px;
  display: flex;
  flex-direction: column;
 
`
const LinhaDeTarefa = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  
`


const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Math.random(), 
          texto: 'Texto da tarefa',
          completa: false 
        },
        {
          id: Math.random(), 
          texto: 'Tarefa 2',
          completa: true 
        }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    const guardarTarefa = JSON.stringify(this.state.inputValue)
    localStorage.setItem("tarefa", guardarTarefa)
  };

  componentDidMount() {   
    localStorage.getItem("tarefa")
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(), 
      texto: this.state.inputValue,
      completa: false 
    }

    const novaListaDeTarefas = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas: novaListaDeTarefas})
    this.setState({inputValue: ''})
  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })

    this.setState({tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  removerTarefa = (id) => {
    const tarefasRemovidas = this.state.tarefas.filter((item) => {
      if (id === item.id) {
        return false
      } else {
        return true
      }
    })
    this.setState({tarefas: tarefasRemovidas})
  }


  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <LinhaDeTarefa>
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
               
              </Tarefa>
              <button type="button" onClick={() => this.removerTarefa(tarefa.id)}>Apagar</button>
              </LinhaDeTarefa>
            )
          })}
          
        </TarefaList>
      
         
      </div>
    )
  }
}

export default App