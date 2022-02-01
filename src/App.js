import { useState } from 'react';
import './App.css';
import { darkTheme, GlobalStyles, lightTheme } from './theme';

function App() {
  const [theme, setTheme] = useState(false)
  return (
    <div>
      <GlobalStyles theme={theme ? lightTheme : darkTheme} />
      <h1>toggle theme</h1>
      <button onClick={() => setTheme(!theme)}> {theme ? 'dark' : 'light'}</button>
      <a href="https://github.com/mdmehedyhassan/re-react-dark-mode">code link</a>
    </div>
  );
}

export default App;
