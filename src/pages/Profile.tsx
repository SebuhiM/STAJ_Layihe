import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../css/profile.css";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const user = {
    name: "Sebuhi Memedov",
    email: "memmedovsebuhi2007@example.com",
    phone: "+994 50 123 45 67",
    joinedDate: "January 2026",
  };

  if (loading) {
    return <div style={{ textAlign: "center", padding: "80px", fontSize: "18px", fontFamily: "sans-serif" }}>Loading... </div>;
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">My Profile</h1>

      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {user.name.charAt(0)}
          </div>
          <div>
            <h3 className="profile-name">{user.name}</h3>
            <p className="profile-date">Join Date: {user.joinedDate}</p>
          </div>
        </div>

        <div className="profile-info-group">
          <div className="profile-info-item">
            <span className="profile-label">Email Address</span>
            <strong className="profile-value">{user.email}</strong>
          </div>
          <div className="profile-info-item">
            <span className="profile-label">Phone Number</span>
            <strong className="profile-value">{user.phone}</strong>
          </div>
        </div>

        <div className="profile-actions">
          <button 
            className="profile-edit-btn"
            onClick={() => alert("Data updated!")}
          >
            Edit Profile
          </button>
          <button 
            className="profile-logout-btn"
            onClick={() => navigate("/")}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;