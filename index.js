
/*
    - query params => meusite.com/users?nome=rodolfo&age=28
    - Request Body => { "name":"Rodolfo", "age": 33 }

    - GET          => Buscar informação no back end
    - POST         => Criar informação no back end
    - PUT / Patch  => Alterar/Atualizar informação no Back-end
    - Delete       => Deletar informação no back end


*/

import express, { request, response } from "express";

const app = express();

//Estou dizendo para o Express que estou usando Json
app.use(express.json())


const users = [] //Armazenar usuarios
// criando 1º rota
//rota para buscar informações
app.get("/users", (request, response) =>{
    return response.json({ users })
})


//
app.post("/users", (request,response) =>{

    const {name,age} = request.body

    users.push({name,age});
    

    //retornar resposta ao usuario que adicionou
    return response.json({name,age});
})



app.listen(3000);