// REGOLE DEGLI HOOKS
// 1) si possono utilizzare i React Hooks SOLO nei componenti a funzione
// 2) i React Hooks si inizializzano nei componenti a funzione sempre IN CIMA
// alla dichiarazione del componente, prima del return e al di fuori di qualsiasi
// ciclo, funzione, condizione etc.

import { Button } from 'react-bootstrap'
import { useState } from 'react'

const StateExample = function () {
  // voglio far cambiare l'etichetta del bottone da MARIO a LUIGI e viceversa

  // QUI
  // useState ritorna un ARRAY di 2 ELEMENTI

  const [name, setName] = useState('MARIO') // 'MARIO' è il valore iniziale di name

  //   name // è una variabile di stato
  //   setName // è una funzione che serve ad aggiornare quella variabile di stato
  //   HO CREATO L'EQUIVALENTE DEL SEGUENTE STATO IN UN COMPONENTE A CLASSE
  //   state = {
  //     name: 'MARIO',
  //   }

  return (
    <>
      <div>
        <h2>CIAONE, SONO USESTATE</h2>
      </div>
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
    </>
  )
}

export default StateExample
