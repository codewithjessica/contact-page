import Profile from "./components/Profile";
import LinkButtons from "./components/LinkButtons";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="general">
      <Profile 
        bio="I was born and raised in Hong Kong. Living in this energetic city which
        has enriched my life perspective with a mix of culture and international
        friendships. Also, I have become trilingual with proficiency in English,
        Cantonese and Mandarin. As a graduate at University of Toronto in
        cognitive science where I have studied the mind and its processes. Also,
        I have learned coping strategies and expanded a variety of interests to
        maximize my potential." 
        imageUrl="public/img/jessica.jpg"/>
        <LinkButtons url="https://www.linkedin.com/in/jessicacheng0217" label="LinkedIn"/>
        <LinkButtons url="https://github.com/codewithjessica" label="GitHub"/>
        <LinkButtons url="/public/Jessica_Resume.pdf" label="Resume"/>
      <Form/>
    </div>
  )
}

export default App