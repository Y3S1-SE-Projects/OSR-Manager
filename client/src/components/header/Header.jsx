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
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fjasonstcyr.com%2F2021%2F09%2F28%2Fbuilding-a-timeline-with-polywork%2F&psig=AOvVaw0gnn_X9mW05Ki2zkD7pq3S&ust=1654025750615000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCICW3qD8h_gCFQAAAAAdAAAAABA1"
        alt=""
      />
    </div>
  );
}
