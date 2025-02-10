
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product';
import Card from './Pages/Card'
import Login from './Pages/LoginSignUp'
import Footer from './Components/Footer/Footer';
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'
import {Game} from './Pages/Game'
import About from './Pages/About';
import SocksPage from './Pages/SocksPage';
import SneakerPage from './Pages/SneakerPage';
import PantsPage from './Pages/PantsPage';
import CapsPage from './Pages/CapsPage';
import SlipperPage from './Pages/SlipperPage';
import FudbolkaPage from './Pages/FudbolkaPage';
import TrekoPage from './Pages/TrekoPage';
import SviterPage from './Pages/SviterPage';
import NimchaPage from './Pages/NimchaPage';
import MakasPage from './Pages/MakasPage';
import BagPage from './Pages/BagPage';
import BoshqaPage from './Pages/BoshqaPage';
import DiscountPage from './Pages/DiscountPage';
import LookPage from './Pages/LookPage';
import NewCollactions from './Components/NewCollactions/NewCollactions'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Shop />} />
        <Route path='/mens' element={ <ShopCategory banner={men_banner} category="men" />} />
        <Route path='/womens' element={ <ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={ <ShopCategory banner={kids_banner} category="kid" />} />
        <Route path='/newcollactions' element={<NewCollactions />} />
        <Route path='/justgame' element={ <Game />} />
        <Route path='/socks' element={ <SocksPage />} />
        <Route path='/sneakers' element={ <SneakerPage />} />
        <Route path='/pants' element={ <PantsPage />} />
        <Route path='/caps' element={ <CapsPage />} />
        <Route path='/sviter' element={ <SviterPage />} />
        <Route path='/fudbolka' element={ <FudbolkaPage />} />
        <Route path='/treko' element={ <TrekoPage />} />
        <Route path='/slipper' element={ <SlipperPage />} />
        <Route path='/bag' element={ <BagPage />} />
        <Route path='/makas' element={ <MakasPage />} />
        <Route path='/nimcha' element={ <NimchaPage />} />
        <Route path='/boshqa' element={ <BoshqaPage />} />
        <Route path='/look' element={ <LookPage />} />
        <Route path='/discount' element={ <DiscountPage />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/card' element={<Card />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
