// jwt -> --login (gerar o token) usuará o método sign
// jwt -> --autenticar (verificar o token) usuará o método verify

//jwt.sign(payload, secret, {expiresIn: '1h'}); definido no serviço de login
//jwt.verify(token, secret); definido no middleware de autenticação

const jwt = require('jsonwebtoken');

console.log(jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30', 'a-string-secret-at-least-256-bits-long'))

console.log(jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV31', 'a-string-secret-at-least-256-bits-long'))

//para acessar o valor do token devemos utilizar um atributo do objeto de requisição chamado headers e dentro dele o atributo authorization

//const token = req.headers.authorization -- esse valor será uma string do contendo 'Bearer ' + token
//para captar apenas o valor do token vamos usar split(' ')[1]
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30'
const tokenSemBearer = token.split(' ')[1];


