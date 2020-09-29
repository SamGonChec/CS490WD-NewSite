import React, {useEffect} from 'react';
import '../css/App.css';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Doctors from '../pages/Doctors';
import Layout from '../components/Layout';
import { useSelector } from 'react-redux';

function App() {
    
  useEffect(() => {
    // reset scroll on rerender
    window.scrollTo(0,0);
  });

      const currentTab = useSelector((state) => state.tabReducer.currentTab );
      let currentPage;

      if (currentTab === "Home") {
        currentPage = <Home/>;
      }else if (currentTab === "About") {
        currentPage = <About/>;
      }else if (currentTab === "Services") {
        currentPage = <Services/>;
      } else if (currentTab === "Doctors") {
        currentPage = <Doctors/>
      }

      return (
        <div className="App">
            <Layout>
                {currentPage}
            </Layout>
        </div>
      );
    }
    
    export default App;