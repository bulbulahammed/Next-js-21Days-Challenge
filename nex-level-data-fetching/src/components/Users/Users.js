"use client"
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=> setUsers(data))
    },[]);


    return (
        <div className="container text-center">
            <h2>Welcome To Users Page</h2>
            <h4>We Have Total:{users.length} users</h4>
            <div className="grid grid-cols-3 gap-3 mx-auto text-center">
                {
                    users.map((user)=> (
                        <div key={user.id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <p>{user.email}</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">{user.username}</button>
                            </div>
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Users;