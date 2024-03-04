import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <h1 className="heading"> Welcome to my site</h1>
      <p>My name is Jessica</p>
      <h2>Bio</h2>
      <p>
        I was born and raised in Hong Kong. Living in this energetic city which
        has enriched my life perspective with a mix of culture and international
        friendships. Also, I have become trilingual with proficiency in English,
        Cantonese and Mandarin. As a graduate at University of Toronto in
        cognitive science where I have studied the mind and its processes. Also,
        I have learned coping strategies and expanded a variety of interests to
        maximize my potential.
      </p>
      <a href="https://www.linkedin.com/in/jessicacheng0217" target="_blank" rel="noopener noreferrer">
        <button>LinkedIn</button>
      </a>
      <a href="https://github.com/codewithjessica" target="_blank" rel="noopener noreferrer">
        <button>GitHub</button>
      </a>
      <a href="/public/Jessica_Resume.pdf" target="_blank">
        <button>Resume</button>
      </a>
    </div>
  );
};

export default Profile;
