
import './App.css';
import { useState } from 'react';
import Home from './home';
import Test from './formulario';
const Main = () => {
  const [state, setState] = useState({
    loading: false,
    screen: null,
  });

  return (
    <div>
      {state.loading && <div>Loading...</div>}
      {!state.screen && !state.loading && (
        <Home state={state} setState={setState} />
      )}
      {state.screen === "formularioCurso" && !state.loading && (
        <Test state={state} setState={setState}/>
      )}
    </div>
  );
};

export default Main;

