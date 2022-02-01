import './App.css'
import { useEffect, useState } from 'react'
import StudentList from './List'

const roster = [
  'Taylor',
  'April',
  'Weston',
  'Jason'
]

function App() {
  const [injured, setInjured] = useState([])
  // const [court, setCourt] = useState(roster)
  // const [deck, setDeck] = useState('')
  // const [hotSeat, setHotSeat] = useState('')
  // const [bench, setBench] = useState([])
  const [court, setCourt] = useState({queue: roster, deck: '', hotSeat: '', bench: []})

  const durstenfeldShuffle = (q) => {
    let i = q.length - 1
    while(i>0) {
      const j = Math.floor(Math.random() * (i + 1));
      [q[i], q[j]] = [q[j], q[i]];
      i--
    }
    return q
  }

  const play  = () => {
    // if deck is empty but hotSeat is full, reset court with shuffled queue
    if(!court.deck && court.queue.length===0) {
      let shuffledQueue = durstenfeldShuffle(roster)
      setCourt({queue: shuffledQueue, deck: '', hotSeat: '', bench: []})
      return
    }
    let newCourt = {}
    // if hotSeat, move hotSeat to bench
    if(court.hotSeat) newCourt.bench = court.bench.concat([court.hotSeat])
    else newCourt.bench = court.bench
    // if onDeck, move onDeck to hotSeat
    if(court.deck) newCourt.hotSeat = court.deck
    else newCourt.hotSeat = court.hotSeat // TODO modify this
    // if queue isn't empty, move one player to deck
    // new queue is old queue minus the first elem
    if(court.queue.length>0) {
      newCourt.deck = court.queue[0]
      newCourt.queue = court.queue.slice(1)
    } else {
      newCourt.deck = ''
      newCourt.queue = []
    }
    setCourt(newCourt)
  }

  return (
    <div className="App">
      <StudentList title={'Queue'} students={court.queue} />
      <StudentList title={'Bench'} students={court.bench} />
      <button onClick={play}>Play</button>
    </div>
  );
}

export default App;
