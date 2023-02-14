import Home from "./home";
import { Configuration, OpenAIApi } from "openai";
import Header from "./Component/Header";
import Advertisment from "./Component/Advertisment";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  return (
    <div>
      <Header />
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          <Route exact path="/" element={<Home openai={openai} />} />
          <Route exact path="/Advertisment" element={<Advertisment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
