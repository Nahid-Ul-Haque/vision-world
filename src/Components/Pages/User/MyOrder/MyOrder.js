import React, { useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';


const MyOrder = () => {
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://protected-mesa-72956.herokuapp.com/myorder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, [user?.email]);
    return (
        <div>

        </div>
    );
};

export default MyOrder;