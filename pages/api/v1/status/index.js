import database from 'infra/database.js'

async function status(request,response){
  const update_at =  new Date().toISOString();
  const db_version_resultado = await database.query('select version()');

 /// db_version =db_version_resultado.rows[0].version

  response.status(200).json({
    update_at:update_at,
   /// db_version:db_version
  })
}

export default status;