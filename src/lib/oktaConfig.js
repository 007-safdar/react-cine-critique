export const oktaConfig ={
    clientId:'0oacvxsruvU5ZobzQ5d7',
    issuer:'https://dev-29879020.okta.com/oauth2/default',
    redirectUri:'http://localhost:3000/login/callback',
    scopes:['openid','profile','email'],
    pkce:true,
    disableHttpsCheck: true,
}
