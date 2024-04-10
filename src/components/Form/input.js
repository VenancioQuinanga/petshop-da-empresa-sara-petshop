function Input({type,name,id,placeholder,value,event}) {
    return (
      <>
        <input 
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder}
        onInput={event}
        value={value}/>
      </>
    );
  }
  
  export default Input;
  