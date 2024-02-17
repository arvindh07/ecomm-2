const getExpiryDate = () => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 2);
    return expires;
}

export const COOKIE_OPTION = {
    path: "/",
    httpOnly: true,
    expires: getExpiryDate(),
    signed: true,
    domain: "localhost"
}
export const COOKIE_NAME = "auth_token";