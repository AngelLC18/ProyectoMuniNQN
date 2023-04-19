const Home = ({ state, setState }) => {
    const handleClick = () => {
      setState({ ...state, screen: "formularioCurso" });
    };
  
    return (
      <div>
        Home
        <button onClick={handleClick}>Ir al formulario</button>
      </div>
    );
  };
  
  export default Home;