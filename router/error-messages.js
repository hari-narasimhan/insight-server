"use strict";

exports = {
    INVALID_BODY : { message: 'Invalid or empty body passed' },
    NOT_AUTHENTICATED: { message: 'Token not found, please login to access the resource' },
    TOKEN_EXPIRED : { message: 'Token already expired, please login again' },
    USER_NOT_FOUND: { message: 'User no longer exists in the system' },
    INVALID_TOKEN: { message: 'Invalid token'}
};