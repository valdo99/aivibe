import Logo from "../logo.png";
export const LogoHeader = () => {
  return (
    <div className="header">
      <img src={Logo}></img>
      <span className="AI">AI</span>
      <span className="vibe">Vibe</span>
    </div>
  );
};
