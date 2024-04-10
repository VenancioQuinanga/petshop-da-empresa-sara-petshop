function Product({id,descricao,imagem}) {
    return (
      <>
      <p>
        <img src={imagem} alt={descricao}/>
      </p>
        <p key={id}>Descricao : {descricao}</p>
      </>
    );
  }
  
  export default Product;
  