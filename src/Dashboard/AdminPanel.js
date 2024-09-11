import React from "react";
import './AdminPanel.css';

//use {} to rename the props

// first div on liine 10 is admin, if not the second div
function AdminPanel({user}){
    return (
        <div className="admin-panel">
            {user.isAdmin?(
                <div className="admin-buttons">
                    <h1> Admin Dashboard</h1>
                    <p> Welcome, {user.name}! You have admin privileges.</p>
                    <button> Add New Users </button>
                    <button> Manage Users </button>
                    <button> Manage Settings </button>
                    <button> View Reports </button>
                </div>):(
                    <div className="guest-buttons">
                    <h1> Guest Dashboard</h1>
                    <p> Welcome, {user.name}! You do not have admin privileges.</p>
                    <button> Update Personal Information </button>
                    <button> Settings </button>
                </div>)}
        </div>
    );
}

export default AdminPanel;