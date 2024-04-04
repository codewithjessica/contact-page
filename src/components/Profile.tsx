import "./Profile.css";

interface ProfileProps {
  imageUrl: string;
  userName: string;
  bio: string;
}

const Profile = ({ imageUrl, userName, bio }: ProfileProps) => {
  return (
    <div className ="container">
      <div className="profile-pic"> 
        <img src={imageUrl} alt="Stitch Waving GIF"></img>
      </div>
      <div className="profile-content">
        <h2>Hi, I'm {userName} 👋🏻</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default Profile;
