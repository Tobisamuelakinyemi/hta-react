import  {useEffect, useState} from 'react'
const githuburl = "https://api.github.com/users";
console.log(githuburl);

const Githubuser = () => {
    // const[count, setCount] =useState(0);
    const[users, setUsers] = useState([])
       useEffect(()=> {
        const fetchUsers=async()=> {
            try{
                const response =await fetch(githuburl);
                const users = await response.json();
                setUsers(users);
                 console.log(users);
            } catch(error){

                console.log(error);

            }
        };
        console.log("useEffect don run" )
         fetchUsers();

       },[]);


  return (
    <div>
      {users.map((users)=>{
        const{id, login,avatar_url, html_url} =users;
        return(
            <ul key={id}>
                <li>
                    <div>
                        <img src={avatar_url} alt={login} height='96px' />
                    </div>
                    <div>
                        <h1>{login}</h1>
                        <a href={html_url}>take me to{login} page</a>
                    </div>
                </li>


            </ul>
        );
})}
    
    </div>
  )
}

export default Githubuser;


