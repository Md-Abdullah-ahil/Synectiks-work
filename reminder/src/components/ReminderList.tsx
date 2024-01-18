import Reminders from "../models/Reminders"

interface ReminderListProps  {
    items:Reminders[]
}
const ReminderList = ({items}:ReminderListProps) => {
    console.log(items)
  return (
    <ul className="list-group  bg-gradient border-black">
      {items.map(item => <li key={item.id} className="list-group-items text-danger border-1 text-text-decoration-none list-unstyled fw-bold h2">{item.title}</li>)
    }</ul>
  )
}

export default ReminderList