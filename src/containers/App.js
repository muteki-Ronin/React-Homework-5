// CORE
import { useState, useEffect } from "react";
// COMPONENTS
import { ListItems } from "../components/listItems/ListItems";
import { Loader } from "../components/loader/Loader";
import { ErrorBoundary } from "../components/errorBoundary/ErrorBoundary";
// STYLES
import "./style.css";

export const App = () => {
  const [state, setState] = useState({
    items: [],
    itemType: "people",
    isLoading: true,
  });

  const requestItems = (type) => {
    fetch(`https://swapi.dev/api/${type}`)
      .then((response) => response.json())
      .then((data) =>
        setState({ items: data.results, itemType: type, isLoading: false })
      )
      .catch((error) => {
        console.error(error);
        setState({ ...state, isLoading: false });
      });
  };

  useEffect(() => {
    requestItems("people");
  }, []);

  const handleClick = (type) => {
    setState({ ...state, isLoading: true });
    requestItems(type);
  };

  return (
    <ErrorBoundary>
      <div className="container">
        <header className="header-container">
          <h1 className="header-title">StarDB</h1>
        </header>
        <main className="main-container">
          <div className="btn-panel">
            <button
              className={state.itemType === "people" ? "btn-active" : "btn"}
              onClick={() => handleClick("people")}
            >
              People
            </button>

            <button
              className={state.itemType === "planets" ? "btn-active" : "btn"}
              onClick={() => handleClick("planets")}
            >
              Planets
            </button>

            <button
              className={state.itemType === "starships" ? "btn-active" : "btn"}
              onClick={() => handleClick("starships")}
            >
              Starships
            </button>
          </div>
          {state.isLoading ? (
            <Loader />
          ) : (
            <ListItems items={state.items} type={state.itemType} />
          )}
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default App;
