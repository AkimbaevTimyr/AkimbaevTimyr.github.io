export function setUser (email: string,token: string){
    localStorage.setItem('user', JSON.stringify({email, token}))
    return ''
}