test("Get to /api/v1/status espera 200", async ()=>{
  const response =  await fetch("http://localhost:3000/api/v1/status")
expect(response.status).toBe(200)

//teste data update do banco 
const  responseBody = await response.json();
expect (responseBody.update_at).toBeDefined();

// teste version 
const dt_convertida =  new Date(responseBody.update_at).toISOString();
 expect(responseBody.update_at).toEqual(dt_convertida);// caso a data venha null 

 // teste version do Postgres
 expect(responseBody.dependencias.database.version).toEqual('16.7')

 // Quantidade maxima de Conexão do banco
 expect(responseBody.dependencias.database.max_connections).toEqual(100)

 // Total de conexão no banco
 expect(responseBody.dependencias.database.qtde_connections).toEqual(1)

});