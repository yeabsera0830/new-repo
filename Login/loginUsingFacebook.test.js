const loginUsingFacebook = require('./loginUsingFacebook')

it('"Passing" Test for Loggin In with Facebook', async () => {
    const facebookToken = 'EAAIZCRdirl3wBAJrV6T6b9eOMoYDZA9vZAQJZAZAUodYSnVcIExITkTGiaGOWfDEiqLwqZCWM6QLDyD8QqlSvijDWvxzPG7AMvmHRbShZBjAohfIUP7txZA6RwarGBc6rFwzZCHvsszFnhRFC3zkHZAD9YYnC3b29bGUZBQ1P6AJuV33vscAB5ChasD3IoNlQaoRzf5pP7B1Lg821mt0lGCc4K6A0SMHeePcJteNUmEURUuZAAZDZD'
    const response = await loginUsingFacebook(facebookToken)
    expect(response.status).toBe(200)
});

it('"Failing Test for Loggin In With Facebook"', async () => {
    const facebookToken = '"FAIL"EAAIZCRdirl3wBAJrV6T6b9eOMoYDZA9vZAQJZAZAUodYSnVcIExITkTGiaGOWfDEiqLwqZCWM6QLDyD8QqlSvijDWvxzPG7AMvmHRbShZBjAohfIUP7txZA6RwarGBc6rFwzZCHvsszFnhRFC3zkHZAD9YYnC3b29bGUZBQ1P6AJuV33vscAB5ChasD3IoNlQaoRzf5pP7B1Lg821mt0lGCc4K6A0SMHeePcJteNUmEURUuZAAZDZD'
    const response = await loginUsingFacebook(facebookToken)
    expect(response.status).toBe(400)
});