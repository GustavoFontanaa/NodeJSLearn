const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = [ "Item a", "Item b", "Item c" ]

    res.render('dashboard', {items})
})

app.get('/', (req, res) => {

    const user = {
        name: "Gustavo",
        surname: "Fontana",
        age: "21",
    }

    const auth = false

    const approved = true

    res.render('home', { user, auth, approved })
})

app.listen(3000, () =>{
    console.log('App funcionando!')
})