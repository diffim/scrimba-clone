import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SiteWindow from "./components/SiteWindow";
import TextEditor from "./components/TextEditor";
import Videobar from "./components/Videobar";

function App() {
  const [showSiteWindow, setShowSiteWindow] = useState(true);

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <TextEditor
        showSiteWindow={showSiteWindow}
        setShowSiteWindow={setShowSiteWindow}
      />
      <Videobar />
      <SiteWindow
        showSiteWindow={showSiteWindow}
        setShowSiteWindow={setShowSiteWindow}
      />
    </div>
  );
}

export default App;
