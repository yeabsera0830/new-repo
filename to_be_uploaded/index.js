const express = require('express')
const app = express()

const signUpUsingPhone = require('./Sign_Up/signUpUsingPhone')
const signUpUsingFacebook = require('./Sign_Up/signUpUsingFacebook')
const loginPhone = require('./Login/loginUsingPhone')
const loginFacebook = require('./Login/loginUsingFacebook')

const fetchPlacesByCatagory = require('./Places/fetchPlacesByCatagory')

app.use(express.json())

const port = process.env.PORT || 8081

app.listen(port, () => console.log("Server Running on *:8081"))

const links = {
    loginWithPhone: "https://nameless-coast-36151.herokuapp.com/login/phone",
    loginWithFacebook: "https://nameless-coast-36151.herokuapp.com/login/facebook",
    signUpWithPhone: "https://nameless-coast-36151.herokuapp.com/signup/phone",
    signUpWithFacebook: "https://nameless-coast-36151.herokuapp.com/signup/facebook",
    getPlaceCount: "https://nameless-coast-36151.herokuapp.com/place/count"
}

app.get('/links', (req, res) => {
    res.status(200).send(links)
})

app.get('/place/count', async (req, res) => {
    const catagory = req.body.catagory
    const response = await fetchPlacesByCatagory(catagory)
    res.status(response.status).send(response)
})

app.post('/signup/phone', async (req, res) => {
    const phoneNumber = req.body.phoneNumber
    const password = req.body.password
    const response = await signUpUsingPhone(phoneNumber, password)
    res.status(response.status).send(response)
})

app.post('/signup/facebook', async (req, res) => {
    const facebookToken = req.body.facebookToken
    const response = await signUpUsingFacebook(facebookToken)
    res.status(response.status).send(response)
})

app.post('/login/phone', async (req, res) => {
    const phoneNumber = req.body.phoneNumber
    const password = req.body.password
    const response = await loginPhone(phoneNumber, password)
    res.status(response.status).send(response)

})

app.post('/login/facebook', async (req, res) => {
    const facebookToken = req.body.facebookToken
    const response = await loginFacebook(facebookToken)
    res.status(response.status).send(response)
})