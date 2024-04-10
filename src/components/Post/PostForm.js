import Input from "../Form/input"
import Button from "../Form/Button";
import { useState } from "react";

function PostForm({btnText,handleSubmit}) {
  const [post,setpost] = useState([])

  function submit (e){
    e.preventDefault()
    handleSubmit(post)
    console.log(post)
  }

const handleChange = (e)=>{
  setpost({...post,[e.target.name]:e.target.value})
  console.log(post)
}

    return (
      <>
        <form onSubmit={submit}>
            <Input
                type="text"
                id="descricao"
                name="descricao"
                placeholder="Crie uma descrição do produto"
                event={handleChange}
            />
            <Input
                type="file"
                id="imagem"
                name="imagem"
                placeholder="Escolha uma imagem"
                event={handleChange}
            />
            <Button
                type="submit"
                id="send"
                name="send"
                value={btnText}
            />
        </form>
      </>
    );
  }
  
  export default PostForm;
  