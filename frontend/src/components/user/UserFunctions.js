
export const register = async newUser => {
    let config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    }
    let res = await fetch('http://localhost:8000/api/user/signup', config);
    let json = await res.json();
    return json;
}

export const login = async user => {
    let config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    let res = await fetch('http://localhost:8000/api/user/signin', config);
    let json = await res.json();
    if(json.token){
        localStorage.setItem('usertoken', json.token);
        return 'Logged'
    }else{
        return json.message
    }
}