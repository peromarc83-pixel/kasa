import "../styles/Banner.scss";

export default function Banner({ image, title, className }) {
  return (
    <div className={`banner ${className || ""}`} style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-overlay"></div>
      <h1 className="banner-title">{title}</h1>
    </div>
  );
}
