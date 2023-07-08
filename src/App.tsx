import { RouterProvider } from 'react-router-dom'
import router from '@/router'

// The Project use react-router-dom v6 in App.tsx
const App = () => {
  return <RouterProvider router={router} />
}

export default App
