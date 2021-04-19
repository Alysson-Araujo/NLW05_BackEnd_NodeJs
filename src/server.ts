import express, { response } from "express";
/* 
   *** em relação ao import express from "express";
   quando estiver ... no nome da dependência, significa que as tipagens dessa biblioteca 
   vem separadas e para instalar é usar o 
   $ npm add @types/<nome da dependencia> -D
   $ npm add @types/express -d
   
   Também será necessário instalar o typescript como uma dependência usando o código
   $ npm add typescript -d
   
   Após fazer a instalação do typescript precisamos colocar o seguinte script
   $ npx tsc --init
   Isso vai criar um aquivo de configuração do typescript. Apos isso precisamos alterar no 
   arquivo tsconfig.json o "strict": colocando false em vez de true, isso evita que ele faça
   verificações extras na aplicação, pois o typescript já faz toda a verificação quando é carre-
   gado a aplicação
   
   após alterar no arquivo package.json e adicionar um script dev
    precisamos usar isso 
    $ npm i ts-node-dev -D 
   instalando o pacote e em seguidar executar o seguinte comando:
    $ npm run dev
    se tudo der certo a mensagem irá aparecer 
     Server is running on port 3333


   comandos extras passadas do discord {
      npm run tsc --init
      $sudo apt install node-typescript and  $tsc init

   }
   
*/ 
const app = express();

/**
 * GET = BUSCA
 * POST = CRIAÇÃO
 * PUT = ALTERAÇÃO
 * DELETE = DELETAR
 * PATCH = ALTERAR UMA INFORMAÇÃO ESPECÍFICA
 */

// REQUISIÇÃO GET
// app.get("<url ou rota>", função (request, response));

/**
 * Resquest é tudo que eu estou requisitando e o response é o que será retornado para o usuário
 * do servidor.
 * podemos também retornar um json dessa forma:
 * return response.json({
      menssage: "Olá NLW 05"
  });
}
 */
app.get("/", (request, response) =>{
   return response.json({
      menssage: "Olá NLW 05"
  });
});



app.post("/users", (request, response) =>{
   return response.json({
      menssage: "Usuário salvo com sucesso!"});
});

app.listen(3333, () => console.log("Server is running on port 3333"));