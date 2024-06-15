import React, { useEffect, useState } from 'react';

const Github = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log(data);
                setData(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (

        <div className='bg-gray-600 p-10 text-3xl text-center text-white'>

            <h3> <span className='text-orange-500'>Login</span>  : {data.login}</h3> 
            <h3> <span className='text-orange-500'>Followers</span>  : {data.followers}</h3> 
           <img className='mx-auto py-10 ' src={data.avatar_url} alt="" width={300} />

        </div>

    );
}

export default Github;




