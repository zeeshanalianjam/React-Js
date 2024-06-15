import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const {userid} = useParams()
    return (
        <>
        <div className='bg-gray-700 text-2xl text-center p-10 text-white'>
            User: {userid}
        </div>
        </>
    );
}

export default User;
