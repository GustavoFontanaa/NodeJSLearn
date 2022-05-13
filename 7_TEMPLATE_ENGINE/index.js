const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: "Gustavo",
        surname: "Fontana",
        age: "21",
    }

    res.render('home', { user: user})
})

app.listen(3000, () =>{
    console.log('App funcionando!')
})