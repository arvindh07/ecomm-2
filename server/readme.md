# Ecommerce Backend

- initialized express app
- connected to mongodb via mongoose
- added user router for login, signup and cleaned up folders into models, routes and controllers


## learning

- default start point to log the request method and request path
- disconnect option of mongoose connection when server disconnects
- for logout function, we will set the cookies maxAge to 0
- asserting json type, import products from "../data/products.json" assert { type: "json" };

### clear cookie

- res.cookie(COOKIE_NAME, '', {
    httpOnly: true,
    maxAge: new Date(0)
})

### to be deleted:

- jwt alias jsonwebtoken is used in the process of authorization
- client login with email and password, then server creates a jwt token and then sends to the client
- jwt token consists of header, payload and signature
- payload will contain that secret information and it will be in encypted format🔥
- then on subsequent request that client sends, the server will authorize the client using the jwt token
and then the server provides the requested resource

