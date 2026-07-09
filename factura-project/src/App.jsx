import { useState } from 'react'
import AppShell from './components/layout/AppShell'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppShell>
      <HomePage/>
    </AppShell>
    </>
  )
}

export default App
