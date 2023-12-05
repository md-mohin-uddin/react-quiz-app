import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Video from "./Video";
function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
