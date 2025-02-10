import database from '../../../../infra/database.js'

async function status(request,response){
  const resultado = await database.query('SELECT 10*5 as resultado;')
  console.log(resultado.rows)
  response.status(200).json({chave:"valor",teste:"1411",vini:[1111]})
}

export default status;