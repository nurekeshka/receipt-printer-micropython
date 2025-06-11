import "./Loading.css";

function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 position-fixed top-0 start-0 z-3">
      <output className="spinner-border">
        <span className="visually-hidden">Loading...</span>
      </output>
    </div>
  );
}

export default Loading;
