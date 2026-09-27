import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'

function Placeholder({ title }: { title: string }) {
  return <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="problems" element={<Placeholder title="Problems" />} />
          <Route path="revision" element={<Placeholder title="Revision" />} />
          <Route path="patterns" element={<Placeholder title="Patterns" />} />
          <Route path="problems/new" element={<Placeholder title="Add Problem" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
