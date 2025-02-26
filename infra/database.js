import  { Client }  from 'pg';

async function query(queryObject){
  const client = new Client({
    host:process.env.POSTGRES_HOST,
    database:process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port:process.env.POSTGRES_PORT
  });
  try {
    await client.connect();
    const resultado = await client.query(queryObject);
    return resultado;
  }catch (error){
    console.error('Erro para executar o sql',error)
    throw error;
  } finally{
    await client.end();
  }
  
  
}



export default {
  query:query
}