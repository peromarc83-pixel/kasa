import "../styles/Banner.scss";

function Banner(props) {

  const image = props.image;
  const title = props.title;
  const className = props.className;

  return (
    <div
      className={"banner " + (className ? className : "")}
      style={{ backgroundImage: "url(" + image + ")" }}
    >

      <div className="banner-overlay"></div>

  <h1 className="banner-title">
  {title === "Chez vous, partout et ailleurs" ? (
    <>
      Chez vous, <br className="banner-title__break" />
      partout et ailleurs
    </>
  ) : (
    title
  )}
</h1>

    </div>
  );
}

export default Banner;