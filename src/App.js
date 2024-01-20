import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import ProductList from './components/ProductList';

const products = [
  {
    id: 1,
    name: 'Rice Idliyappam',
    price: 125,
    image: 'https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/i/d/idiappam.jpg'
  },
  {
    id: 2,
    name: 'Goat+chicken+prawns',
    price: 599,
    image: 'https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/c/h/chicken_mutton_s_c_prawns_5.jpg'
  },
  {
    id: 3,
    name: 'Goat+chicken+chicken cubes',
    price: 699,
    image: 'https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/g/o/goat-chicken-chicken_cubes_1_1.jpg'
  },
  {
    id: 4,
    name: 'Hyderabadi Chicken Dumbiryani',
    price: 199,
    image: 'https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/h/y/hydrabadi.jpg'
  },
  {
    id: 5,
    name: 'Tender Goat',
    price: 449,
    image: 'https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/p/r/premium_tender_goat_curry_cut_1_.jpg'
  },
  {
    id: 6,
    name: 'Boneless Chicken Cubes',
    price: 249,
    image: 'https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/c/h/chicken_cubes_3.jpg'
  },
  {
    id: 7,
    name: 'Chicken schezwan dumplings',
    price: 145,
    image: 'https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/c/h/chicken_schezwan_momos.jpg'
  },
  {
    id: 8,
    name: 'Cajun Chicken Spring Roll',
    price: 149,
    image: 'https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/c/a/cajun-chicken-spring-roll.jpg'
  }
]

function App() {
  return (
    <>
      {/* <Navbar label=''/> */}
      {/* <Hero /> */}
      <Header />
      <ProductList products={products} />
      <Footer />
    </>
  );
}

export default App;
