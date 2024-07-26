import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import WhereToBuy from './components/WhereToBuy/WhereToBuy.jsx';
import Footer from './components/Footer/Footer.jsx';
// import AppBanner from './components/AppBanner/AppBanner.jsx';
function App() {

  return (
    <>
        <div>
            <Hero />
            <Services />
            <WhereToBuy />
            {/* <AppBanner/> */}
            <Footer />
        </div>

    </>
  )
}

export default App
