var User = require('../model/User')
var connect = require('../config/auth').connect
var axios = require('axios')

connect()
async function loginUsingFacebook(token) {
    const url = `https://graph.facebook.com/v3.3/me?fields=email,name&access_token=${token}`
    return await axios.get(url)
                .then(async info => {
                    const facebookID = info.data.id
                    return await User.findOne({ facebookID : facebookID })
                        .then(user => {
                            return {
                                status: 200,
                                token: user.zeilaToken
                            }
                        })
                        .catch(err => {
                            return {
                                status:400,
                                message: 'Could Not Find User'
                            }
                        })
                })
                .catch(err => {
                    return {
                        status: 400,
                        message: 'Unable to Login'
                    }
                })
}

module.exports = loginUsingFacebook