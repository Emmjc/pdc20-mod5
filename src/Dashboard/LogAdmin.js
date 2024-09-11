import React, { useState } from 'react';
import AdminPanel from "./AdminPanel";
import './LogAdmin.css';

import {useNavigate} from 'react-router-dom'; //import nav method
function LogAdmin() {
    // Correctly destructure state values and setters
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('user');
    const [user, setUser] = useState(null);

    const [loginAttempts,setLoginAttempts] = useState (0); //No of login attempts
    const [errorMessage,setErrorMessage] = useState (''); //string for Error message

    const navigate = useNavigate(); //hook to navigate between pages



    const handleLogin = () => {
        const validAdminCredentials = {
            username: 'user123',
            password: 'pass123'
        };

        const isAdmin = accountType === 'admin';

        if(isAdmin && (username === validAdminCredentials.username && password === validAdminCredentials.password)){
            setUser({ name: username, isAdmin });
        }else if (!isAdmin && (username === validAdminCredentials.username && password === validAdminCredentials.password) ){
            setUser({ name: username, isAdmin: false });
        } else {
            setLoginAttempts(prevAttempts => prevAttempts + 1);
            setErrorMessage ('Invalid Credentials');

            if(loginAttempts +1 >= 3){
                navigate ('/auth-error');
            }
        }

    }

    return (
        <div className="login-container">
            {user ? (
                <AdminPanel user={user} />
            ) : (
                <div className="login-form">
                    <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlfor="accountType">Account Type:</label>
                        <select 
                            value={accountType} 
                            onChange={(e) => setAccountType(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="form-actions">
                    <button onClick={handleLogin}>Login</button>

                    {errorMessage && <p style ={{color:'red'}}>{errorMessage}</p>}
                    {loginAttempts > 0 && (
                        <p style={{color:'red'}}>Login Attempts: {loginAttempts}/3</p>
                    )}
                    <button>Signup</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LogAdmin;
