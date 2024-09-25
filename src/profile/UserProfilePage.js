import React, {useState} from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Forms from "./Form";
function UserProfilePage (){

    //Initialize state for user data
    const [userData, setUserData] = useState({
        name: 'Juan Dela Cruz',
        email: 'juan@gmail.com',
        username: 'juan123',
    });

    const handleUpdate = (updatedInfo) =>{
        setUserData((prevState)=>({
            ...prevState,
            ...updatedInfo,
        }));
    }
        
    return (
        <div>
            <Navigation />
            <Profile user={userData}/>
            <Forms user={userData} onUpdate={handleUpdate}/>
        </div>
    );
}
export default UserProfilePage