import { useState } from 'react'

export const ClickCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <button className="btn" onClick={() => setCount((c) => c + 1)}>
        Count: {count}
      </button>
    </>
  )
}
