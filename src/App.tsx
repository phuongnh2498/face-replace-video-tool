import "./App.css";

const App = () => {
  return (
    <>
      <input type="file" />
      <button
        onClick={() => {
          console.log("hello");
        }}
      >
        count is
      </button>
    </>
  );
};

export default App;
