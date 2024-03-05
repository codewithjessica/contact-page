import "./Profile.css";

interface ProfileProps {
   bio: string;
   imageUrl: string;
}

const Profile = ({bio, imageUrl}: ProfileProps) => {
  return (
    <div>
      <h1 className="heading"> Welcome to my site</h1>
      <p>My name is Jessica</p>
      <h2>Bio</h2>
      <p>
        {bio}
      </p>
      <img className="profile-pic" src={imageUrl} alt="profile picture"></img>
    </div>
  );
};

export default Profile;
