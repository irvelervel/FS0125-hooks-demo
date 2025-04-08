// REGOLE DEGLI HOOKS
// 1) si possono utilizzare i React Hooks SOLO nei componenti a funzione
// 2) i React Hooks si inizializzano nei componenti a funzione sempre IN CIMA
// alla dichiarazione del componente, prima del return e al di fuori di qualsiasi
// ciclo, funzione, condizione etc.

// useEffect è un React Hook che serve ad introdurre nei componenti a funzione
// le funzionalità di LIFECYCLE (componentDidMount, componentDidUpdate)

import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const EffectExample = function () {
  // QUI
  // useEffect accetta fino a 2 parametri: una callback (obbligatorio) e un array

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('MARIO')

  useEffect(() => {
    // qui ci mettiamo il codice
    // uno useEffect scritto così si ri-esegue automaticamente OGNI VOLTA
    // che c'è un cambio di state o di props (cioè ad ogni "update")
    console.log('SONO USEEFFECT')
    // questo è un sostituto perfetto di un generico "componentDidUpdate"
    // si triggera sempre per qualsiasi aggiornamento (un po' inutile!)
  })

  // ma useEffect accetta anche un SECONDO parametro: un array di "dipendenze"
  useEffect(() => {
    console.log("CIAO! IO HO L'ARRAY VUOTO")
    // questo qui, con l'array di dipendenze vuoto, è un rimpiazzo per componentDidMount
  }, [])
  //   l'array di dipendenze indica i criteri per cui questo useEffect debba RE-INVOCARSI

  // se riempio l'array di dipendenze con valori (tipicamente state o props), il mio
  // useEffect verrà reinvocato NON sempre ma quando UNA di quelle variabili cambia!
  useEffect(() => {
    console.log('È CAMBIATO NAME')
  }, [name])
  //   l'equivalente di un componentDidUpdate con l'if!

  return (
    <div>
      <h2>CIAONE SONO USEEFFECT</h2>
      <div>
        <Button variant="success" onClick={() => setCounter(counter + 1)}>
          INCR
        </Button>
        <Button variant="info" onClick={() => setCounter(0)}>
          RESET
        </Button>
        <Button variant="warning" onClick={() => setCounter(counter - 1)}>
          DECR
        </Button>
      </div>
      <p>VALORE DI COUNTER: {counter}</p>
      <div>
        <Button
          variant={name === 'MARIO' ? 'danger' : 'success'}
          onClick={() => {
            setName(name === 'MARIO' ? 'LUIGI' : 'MARIO')
          }}
        >
          {name}
        </Button>
      </div>
    </div>
  )
}

export default EffectExample
