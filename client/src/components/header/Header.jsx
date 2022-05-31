import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://miro.medium.com/max/1400/1*Zn7mEZXZmnGu6evZiztk6g.png"
        alt=""
      />
    </div>
  );
}
