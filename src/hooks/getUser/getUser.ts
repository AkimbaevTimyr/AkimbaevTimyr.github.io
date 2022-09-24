export function getUser(){
    const {email, token} = JSON.parse(localStorage.getItem('user') || '{}')
    return {
        token,
        email
    }
}

