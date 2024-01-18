import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminders from './models/Reminders'

function App() {
  const [reminder, setReminder] = useState<Reminders[]>([{
    id:1,
    title:'item1',
  },{
    id:2,
    title:'item2'
  }])
  // const values:Reminders[] =
  return (
    // <button className="btn  btn-primary p-3 border-black rounded-8 text-danger">button</button>
    <ReminderList items={reminder}/>
  )
}

export default App
