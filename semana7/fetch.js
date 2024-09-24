console.log('antes da função')

const pegaDados = (user) => {
  console.log('antes do fetch')
  fetch(`https://api.github.com/users/${user}/repos`)
    .then((res) => {
      return res.json()
    }).then(repos => console.log(repos))
  console.log('depois do fetch')
}

pegaDados('')

console.log('oioi olhem no terminal esse texto')

//assíncrono -> 