import React from "react";
import styled from "styled-components";
import News from "./index";
import Header from "./component/Header";
import gradient1 from "./assets/Image/gradient1.png";
import gradient2 from "./assets/Image/Gradient2.png";
import gradient3 from "./assets/Image/gradient3.png";
import gradient4 from "./assets/Image/Gradient4.png";
import gradient5 from "./assets/Image/Gradient5.png";
import gradient6 from "./assets/Image/Gradient6.png";
import Contact from "./component/pages/Contact";
import Footer from "./component/Footer";
import Sports from "./component/pages/Sports";
import Entertainment from "./component/pages/Entertainment";
import Health from "./component/pages/Health";
import Tech from "./component/pages/Tech";
import Business from "./component/pages/Business";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./component/pages/Error";
// import Scroll from './component/Scroll'
import ChatbotComponent from "./component/ChatBot/ChatbotComponent";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Main>
          <Header />
          <img src={gradient1} className="gradient1" alt="gradient1" />
          <img src={gradient2} className="gradient2" alt="gradient2" />
          <img src={gradient3} className="gradient3" alt="gradient3" />
          <img src={gradient4} className="gradient4" alt="gradient4" />
          <img src={gradient5} className="gradient5" alt="gradient5" />
          <img src={gradient6} className="gradient6" alt="gradient6" />

          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/health" element={<Health />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/business" element={<Business />} />
            <Route path="*" element={<Error />} />
          </Routes>

          {/* ChatBot */}
          <div className="chatApp">
            <ChatbotComponent />
          </div>

          {/* <Scroll /> */}

          <Footer />
        </Main>
      </BrowserRouter>
    </>
  );
};

export default App;

const Main = styled.main`
  padding: 0 102px;
  height: 100%;

  .gradient1 {
    position: absolute;
    left: 0;
    top: 37rem;
  }
  .gradient2 {
    position: absolute;
    right: 0;
    top: 27.5rem;
  }
  .gradient3 {
    position: absolute;
    right: 0;
    top: 127.5rem;
  }
  .gradient4 {
    position: absolute;
    left: 0;
    top: 163.5rem;
  }
  .gradient5 {
    position: absolute;
    right: 0;
    transform: rotate(180deg);
    top: 264.5rem;
  }
  .gradient6 {
    position: absolute;
    left: 0;
    transform: rotate(180deg);
    top: 320rem;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 1rem;

    .gradient1,
    .gradient4,
    .gradient6 {
      display: none;
    }
  }
`;
