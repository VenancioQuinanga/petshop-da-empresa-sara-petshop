function Button({type,name,id,placeholder,value}) {
    return (
      <>
        <button
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder} >{value}</button>
      </>
    );
  }
  
  export default Button;
  