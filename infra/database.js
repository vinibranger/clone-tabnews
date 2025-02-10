import  { Client }  from 'pg';

async function query(queryObject){
  const client = new Client({
    host:process.env.POSTGRES_HOST,
    database:process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port:process.env.POSTGRES_PORT
  });
  await client.connect();
  await client.query(queryObject);
  const resultado = await client.query(queryObject);
  await client.end();
  return resultado;
}



export default {
  query:query
}