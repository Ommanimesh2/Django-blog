
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ContextProvider from './ContextProvider';
function App() {
  return (
    <ContextProvider>
      <Homepage/>
    </ContextProvider>
  )
}

export default App;
