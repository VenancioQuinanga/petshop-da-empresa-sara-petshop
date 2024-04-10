import './index.css';
import './App.css';
import {useState,useEffect} from 'react';
import  Navbar  from './components/layout/Navbar';
import Post from './components/post';
import Pessoa from './components/Pessoa';
import PostForm from './components/Post/PostForm';

function App(post) {
  let [datas,setdatas] = useState([])


  const API = "http://localhost:3500"

  useEffect(()=>{
    fetch(`${API}/posts`,{
      method:"GET",
      headers :{
        "Content-Type" : "aplication/json"
    }
  
    }).then((res)=>{
  
        return res.json()
        
    }).then((posts)=>{

        setdatas(posts.posts)
        
    }).catch((err)=>{
        console.log(err)
    });
  },[])

  function createPost(){
    fetch(`${API}/new/posts`,{
      method:"POST",
      headers :{
        "Content-Type" : "aplication/json"
    },
    body:JSON.stringify(post)
  
    }).then((res)=>{
  
        return res.json()
        
    }).then((posts)=>{

        //setdatas(posts)
        console.log(posts)
        
    }).catch((err)=>{
        console.log(err)
    });
  }

  return (
    <div className='App'>
      <Navbar/>
      <div className='container'>
        <Pessoa
        name={"Venancio Quinanga"}
        old={19}
        profission={"Progamador web Full-Stack"}
        photo={"./logo.svg"}
        />
        {
          datas.map((p) => 
            <Post
            id={p.id}
            descricao={p.descricao}
            imagem={`${p.imagem}`}
            />)
        }
        <PostForm 
        btnText="Criar"
        handleSubmit={createPost}/>
      </div>
    </div>
    
  );
}

export default App;
