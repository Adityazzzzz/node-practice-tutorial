const express = require('express')
const app= express();

const people = require('./router/people')
const login= require('./router/auth')

app.use(express.static('./method-public'))
app.use(express.urlencoded({extended:false}))//**** imp
app.use(express.json());

app.use('/api/people',people)
app.use('/login',login)


app.listen(5000)