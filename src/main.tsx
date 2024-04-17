import './index.css'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './routes/index.tsx'
import { AppProvider } from './providers/appProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <Routes/>
  </AppProvider>
)