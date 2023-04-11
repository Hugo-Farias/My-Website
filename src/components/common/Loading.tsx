import "./Loading.scss";

const Loading = function () {
  const dotsJSX = [];

  for (let i = 1; i <= 5; i++) {
    dotsJSX.push(<span className={`dot${i}`} />);
  }

  return <div className="loading">{dotsJSX}</div>;
};

export default Loading;
