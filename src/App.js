import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="gallery">
        <div className="grid">
            <img src={require("./image/image1.jpg")} alt="Image 1" className="grid-item" />
            <img src={require("./image/image2.jpg")} alt="Image 2" className="grid-item" />
            <img src={require("./image/image3.jpg")} alt="Image 3" className="grid-item" />
            <img src={require("./image/image4.jpg")} alt="Image 4" className="grid-item" />
            <img src={require("./image/image5.jpg")} alt="Image 5" className="grid-item" />
            <img src={require("./image/image6.jpg")} alt="Image 6" className="grid-item" />
        </div>
        <div className="lightbox">
            <div className="lightbox-content">
                <img src="" alt="" className="lightbox-image" />
                <span className="lightbox-close">&times;</span>
            </div>
        </div>
    </div>

  );
}

export default App;
