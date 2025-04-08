import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import StateExample from './components/StateExample'

// gli HOOKS in React sono delle funzionalità aggiunte per replicare nei componenti
// a FUNZIONE i "superpoteri" che conoscevamo nei componenti a CLASSE.
// queste funzionalità sono già aggiunte alla libreria React di default, e non c'è
// nessuna restrizione nel loro utilizzo: potete creare un'app solamente con
// componenti a classe, solamente con componenti a funzione o un mix di classi
// e componenti a funzione dotati di hooks.
// grazie ai due hooks più famosi, "useState" e "useEffect" potrete di fatto
// replicare il 100% delle cose che abbiamo visto finora nei componenti a classe.

// useState replica nei componenti a funzione le caratteristiche dello STATE
// useEffect replica nei componenti a funzione le caratteristiche del LIFECYCLE

function App() {
  return (
    <>
      <h1 className="text-center my-2">REACT HOOKS</h1>
      <div className="text-center">
        <StateExample />
      </div>
    </>
  )
}

export default App
