console.log('antes da função')

const pegaDados = async (user) => {
  console.log('antes do fetch')
  const response = await fetch(`https://api.github.com/users/${user}/repos`)
  const dataJson = await response.json()
  console.log(dataJson)
  console.log('depois do fetch')
}

pegaDados('simaraconceicao')

console.log('oioi olhem no terminal esse texto')