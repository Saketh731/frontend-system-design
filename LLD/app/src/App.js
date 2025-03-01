import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Team from "./components/Team";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import Accordian from "./components/Accordian";
import Comments from "./components/comments/Comments";
import ImageSlider from "./components/image-slider/ImageSlider";
import Pagination from "./components/pagination/Pagination";
import LiveChat from "./components/live-chat/LiveChat";
import SearchUi from "./components/search-ui/SearchUi";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div className="App">
      <div className="text-2xl font-bold py-5 bg-black text-white text-center flex">
        Hello World
        <nav className="p-2 m-2 w-[1200px] flex justify-between text-lg">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/accordian">Accordian</a>
          <a href="/comments">Nested Comments</a>
          <a href="/image-slider">Image Slider</a>
          <a href="/pagination">Pagination</a>
          <a href="/live-chat">Live Chat</a>
          <a href="/search-ui">Search UI</a>
          <a href="/team">Team</a>
          <a href="/login">Login</a>
        </nav>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="ru">Russian</option>
        </select>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About lang={lang} />}></Route>
          </Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/accordian" element={<Accordian />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
          <Route path="/image-slider" element={<ImageSlider />}></Route>
          <Route path="/pagination" element={<Pagination />}></Route>
          <Route path="/live-chat" element={<LiveChat />}></Route>
          <Route path="/search-ui" element={<SearchUi />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
