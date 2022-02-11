import './App.css';
import PageBookMark from './pages/pageBookMark/PageBookMark';
import Article from './pages/article/Article';
import Homepage from './pages/homePage/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation';





function App() {
  return (
    // <>
    //   <Homepage/>
    //   <Article/>
    //   <PageBookMark/>
    // </>

    <Router>
      <Navigation/>
      <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/pageBookMark" element={<PageBookMark/>}/>
      <Route exact path="/article" element={<Article/>}/>
      </Routes>
    </Router>



  );
}

export default App;
