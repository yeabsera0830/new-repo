const loginUsingPhone = require("./loginUsingPhone")

it('"Passing" Test for Signing Up with Phone', async () => {
    const phoneNumber = "0911111111"
    const password = "12345678"
    const response = await loginUsingPhone(phoneNumber, password)
    expect(response.status).toBe(200)
});

it('"Failing Test for Signing Up With Phone"', async () => {
    const phoneNumber = "0911111111"
    const password = "123456789"
    const response = await loginUsingPhone(phoneNumber, password)
    expect(response.status).toBe(400)
});