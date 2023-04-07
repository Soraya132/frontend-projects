
import {ToggleProvider} from "./context/toggleContext";
import Page from "./components/Page";
function App() {
 
  return (
    <ToggleProvider>
      <>
        <Page/>
        
      </>
    </ToggleProvider>
    
  );
}

export default App;
