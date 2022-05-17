import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect( () => {
        console.log(user);
        const email = user?.user?.email;
        const currentUser = {email: email};
        if(email){
            fetch(`https://fast-depths-58856.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    } , [user]);
    return [token, setToken];
}

export default useToken;