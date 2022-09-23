import './App.css';
import {createContext,useState} from "react"
import Quiz from './Component/Quiz';
import Score from './Component/Score';
import Menu from './Component/Menu';
export const DataContext = createContext()
function App() {
  
  const [appState , setAppState] = useState("menu")
  return (
    <DataContext.Provider value={{appState,setAppState}}>
    <div className="App">
      <h1>Web Development Quiz</h1>
      {appState === "menu" && <Menu/> }
      {appState === "quiz" && <Quiz/> }
      {appState === "score" && <Score/> }
    </div>
    </DataContext.Provider>
  );  
}

export default App;
