import './App.css'
import Nav from "./components/nav/Nav"
import Body from "./components/body/Body1"
import Body2 from "./components/body2/Body2"
import Body3 from "./components/body3/Body3"
import BodySection from "./components/body-section/BodySection.jsx"
import BodySection2 from "./components/body-section2/BodySection2.jsx"
import BodySection3 from "./components/body-section3/BodySection3.jsx"
import Footer1 from "./components/footer1/Footer1.jsx"
import Footer2 from "./components/footer2/Footer2.jsx"
import Footer3 from "./components/footer3/Footer3.jsx"
function App() {
  return (
    <>
     <Nav/>
     <Body/>
     <Body2/>
     <Body3/>
     <BodySection/>
     <BodySection2/>
     <BodySection3/>
     <Footer1/>
     <Footer2/>
     <Footer3/>
    </>
  )
}

export default App
