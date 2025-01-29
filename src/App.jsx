import './App.css'
import MeuComponente from './components/MeuComponente'

function App() {

  const animais = [
    {
      nome: "Nelson",
      idade: 10,
      animal: "gato",
      raça: "persa",
      dono: {
        nome: "Pedro",
        cidade: "Lisboa"
      }
    },
    {
      nome: "Amanda",
      idade: 15,
      animal: "cão",
      raça: "Boxer",
      dono: {
        nome: "Joana",
        cidade: "Porto"
      }
    }
  ]

  // Objetivo:
  // Colocar todas as informações no componente
  // com respetiva estilização.

  return (
    <div className='App'>

      <MeuComponente animal={animais[0]} />
      <MeuComponente animal={animais[1]} />

    </div>
  )
}

export default App
