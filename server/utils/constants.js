// unused method
const getExpiryDate = () => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 2);
    return expires;
}

export const COOKIE_OPTION = {
    path: "/",
    httpOnly: true,
    // expires: getExpiryDate(),
    // 2days in milliseconds
    maxAge: 2 * 24 * 60 * 60 * 1000,
    signed: true,
    domain: "localhost"
}
export const COOKIE_NAME = "auth_token";