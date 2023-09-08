const CLIENT_ID = process.env.REACT_APP_AUTH_CLIENT_ID
const DOMAIN =  process.env.REACT_APP_AUTH_DOMAIN_ADDRESS
const AUDIENCE =process.env.REACT_APP_AUTH_AUDIENCE
const TOKENAPI=process.env.REACT_APP_AUTH_TOKENAPI
const DB_URL=process.env.REACT_APP_AUTH_DB_URL
const BACKEND_URL=process.env.REACT_APP_BACKEND_URL
const MOCK_SERVER =process.env.REACT_APP_MOCK_SERVER
const BACKEND_USER_URL=process.env.REACT_APP_USER_URL;
const BACKEND_EXPENSE_URL=process.env.REACT_APP_EXPENSE_URL;


export const api={
    CLIENT_ID:`${CLIENT_ID}`,
    DOMAIN:`${DOMAIN}`,
    AUDIENCE:`${AUDIENCE}`,
    TOKENAPI:`${TOKENAPI}`,
    DB_URL:`${DB_URL}`,
    BACKEND_URL:`${BACKEND_URL}`,
    MOCK_SERVER:`${MOCK_SERVER}`,
    BACKEND_USER_URL:`${BACKEND_USER_URL}`,
    BACKEND_EXPENSE_URL:`${BACKEND_EXPENSE_URL}`
}