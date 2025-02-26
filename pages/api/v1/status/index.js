import database from 'infra/database.js';


const db_nome = process.env.POSTGRES_DB

async function status(request,response){
  const updateAt =  new Date().toISOString();

const databaseVersion = await database.query("SHOW server_version ;")
const databaseVersionValue = databaseVersion.rows[0].server_version

const databaseMaxConections = await database.query("SHOW max_connections;")
const dbMaxConectionsValue = databaseMaxConections.rows[0].max_connections

const databaseQtdeconexaoAtivas = await database.query({
  text : "SELECT count(*)::int FROM pg_stat_activity where datname = $1;",
  values : [db_nome]
});
const dbConections =  databaseQtdeconexaoAtivas.rows[0].count;


  response.status(200).json({
    update_at:updateAt,
    dependencias:{
      database:{
        version: databaseVersionValue,
        max_connections: parseInt(dbMaxConectionsValue),
        qtde_connections:parseInt(dbConections)
      }
    }
  })
}

export default status;