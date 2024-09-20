import './App.css';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import Box4 from './components/Box4';
import Collapsed_Board from './components/Collapsed_Board';
import Navbar from './components/Navbar';
import Sidebar1 from './components/Sidebar1';
import Sidebar2 from './components/Sidebar2';
import Top_div from './components/Top_div';

function App() {
  return (
    <>
  <main>
   <Navbar/>
    <section className="rectangle">
      <Collapsed_Board/>
      <div className="content">
        <Top_div/>
        <div className="main-rectangle">
          <Box1/>
          <Box2/>
          <Box3/>
          <Box4/>
        </div>
      </div>
      <Sidebar1/>
    </section>
    <Sidebar2/>
  </main>
</>

  );
}

export default App;
