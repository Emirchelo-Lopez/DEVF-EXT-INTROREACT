import "./App.css";
import PhotoGallery from "./components/PhotoGallery";
import PhotoProvider from "./components/PhotoProvider";

const App = () => {
  return (
    <PhotoProvider>
      <div className="App">
        <header>
          <h1>React Photo Gallery</h1>
        </header>
        <main>
          <PhotoGallery />
        </main>
      </div>
    </PhotoProvider>
  );
};

export default App;
