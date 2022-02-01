import './App.css'
import Grid from '@mui/material/Grid';

import { useState } from 'react'
import StudentList from './List'
import StudentCard from './Card'
import ROSTER from './ROSTER'

const durstenfeldShuffle = (q) => {
  let i = q.length - 1
  while(i>0) {
    const j = Math.floor(Math.random() * (i + 1));
    [q[i], q[j]] = [q[j], q[i]];
    i--
  }
  return q
}

function App() {
  // const [injured, setInjured] = useState([])
  let shuffledRoster = durstenfeldShuffle(ROSTER)
  const [court, setCourt] = useState({queue: shuffledRoster, deck: '', hotSeat: '', bench: []})


  const play  = () => {
    // if deck is empty but hotSeat is full, reset court with shuffled queue
    if(!court.deck && court.queue.length===0) {
      let shuffledQueue = durstenfeldShuffle(ROSTER)
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
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <StudentList title={'Queue'} students={court.queue} />
        </Grid>

        <Grid item xs = {4}>
          <Grid container>
            <Grid item xs={6}>
              <StudentCard title={'On Deck'} student={court.deck} />
            </Grid>
            <Grid item xs={6}>
              <StudentCard title={'Hot Seat'} student={court.hotSeat} />
            </Grid>

            <Grid container>
              <Grid item xs={12}>
                <button onClick={play}>Play</button>
              </Grid>
            </Grid>

          </Grid>
        </Grid>


        <Grid item xs={4}>
          <StudentList title={'Bench'} students={court.bench} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
