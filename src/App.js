import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import Originals from "./Components/Originals";
import Movies from "./Components/Movies";
import Series from "./Components/Series";
import VideoRender from "./Components/Videos";
import Disney from "./Components/Category/Disney";
import Pixerf from "./Components/Category/Pixer";
import Marvel from "./Components/Category/Marvel";
import NopageFound from "./Components/Category/NopageFound";
import StarWars from "./Components/Category/StarWars";
import SearchPage from "./Components/SearchPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route
            path="/Originals"
            caseSensitive={false}
            element={<Originals />}
          />
          <Route path="/Movies" caseSensitive={false} element={<Movies />} />
          <Route path="/Series" caseSensitive={false} element={<Series />} />
          <Route path="/disney" caseSensitive={false} element={<Disney />} />
          <Route path="/pixer" caseSensitive={false} element={<Pixerf />} />
          <Route path="/marvel" caseSensitive={false} element={<Marvel />} />

          <Route
            path="/Search"
            caseSensitive={false}
            element={<SearchPage />}
          />
          <Route
            path="/starWars"
            caseSensitive={false}
            element={<StarWars />}
          />
          <Route
            path="/detail/:id"
            caseSensitive={false}
            element={<Detail />}
          />
          <Route
            path="/video/:id"
            caseSensitive={false}
            element={<VideoRender />}
          />
          <Route path="*" caseSensitive={false} element={<NopageFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
