import { ReactEventHandler, useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('')
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>현재 카운트 : {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
    </div>
  )
}
