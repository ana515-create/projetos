<<<<<<< HEAD
import {useState} from "react"
=======
import { useState } from "react"
>>>>>>> ccefc0d15e5ebea8bfb7e6f667a4a9ed000a0947

function Formulario(){

    function cadastrarUsuario(e){
        e.preventDefault()
<<<<<<< HEAD
        //console.log(nome)
=======
        //console.log (nome)
>>>>>>> ccefc0d15e5ebea8bfb7e6f667a4a9ed000a0947
        //console.log('Cadastrou o usuário')
        console.log(`Usuário ${nome} cadastrado com a senha: ${senha}`)
    }

<<<<<<< HEAD
    const [nome, setNome] = useState('Ana Portela')
    const [senha, setSenha] = useState()
=======
    const [nome, setNome] = useState('Helo')
    const [senha,setSenha] = useState()
>>>>>>> ccefc0d15e5ebea8bfb7e6f667a4a9ed000a0947

    return(
        <div>
            <h1>Cadastro</h1>
        <form onSubmit={cadastrarUsuario}> 
            <div>
<<<<<<< HEAD
                <label htmlFor="nome">Nome:</label>
                <input type= "text" 
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e)=> setNome(e.target.value)}

                  />
            </div>
            <div>
                <label htmlFor="senha">Senha:</label>
                <input type= "password"
                 id="senha" 
                 name="senha"
                 placeholder="Digite sua senha"
                 onChange={(e)=> setSenha(e.target.value)}

                 
                 />
=======
                <label htmlFor="nome">Nome: </label>
                <input type= "text" 
                id="nome"
                name="nome" 
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e)=> setNome (e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="senha">Senha:</label>
                <input 
                type= "password" 
                id="senha" 
                name="senha" 
                placeholder="Digite sua senha" 
                onChange={(e)=> setSenha (e.target.value)}
                />
>>>>>>> ccefc0d15e5ebea8bfb7e6f667a4a9ed000a0947
            </div>
            <div>
            <input type= "submit" value="Cadastrar"/>
            </div>
        </form>
            </div>
    )
}

export default Formulario