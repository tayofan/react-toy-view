
export const saveToken = (accessToken, refreshToken) => {
    
    localStorage.setItem('login-token', accessToken);
    localStorage.setItem('refresh-token', refreshToken);
    // window.location.reload();
}

export const getToken = () => {

    return {
        accessToken: localStorage.getItem('login-token'),
        refreshToken: localStorage.getItem('refresh-token')
    };

}

export const setHeadersToken = (config) => {
    config.headers["Authorization"] = `Bearer ${getToken().accessToken}`;
    config.headers["RefreshToken"] = `Bearer ${getToken().refreshToken}`;
    return config;
}

export const resetTokens = () => {
    localStorage.removeItem('login-token');
    localStorage.removeItem('refresh-token');
    localStorage.removeItem('id');
}