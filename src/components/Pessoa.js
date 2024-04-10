function Pessoa({name,old,profission,photo}) {
    return (
      <>
      <p>
        <img src={photo} alt={name}></img>
      </p>
        <p>Chamo-me {name}</p>
        <p>Tenho {old} anos de idade</p>
        <p>Sou {profission}</p>
      </>
    );
  }
  
  export default Pessoa;
  