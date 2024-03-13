import { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Home from './view/Home';
import Nearby from './view/Nearby';
import NotFound from './view/NotFound';
import Search from './view/Search'
import DeviceContextProvider from './services/DeviceContextProvider';

export const FilterContext = createContext(null);

export default function App() {
  const [city, setCity] = useState(null);
  const [dist, setDist] = useState(null);
  const [type, setType] = useState(null);

  return (
    <BrowserRouter>
      <DeviceContextProvider>
        <Header />

        <FilterContext.Provider value={{city, setCity,
                                        dist, setDist,
                                        type, setType}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/nearby" element={<Nearby />} />
          　<Route path="*" element={<NotFound />} />
          </Routes>
        </FilterContext.Provider>

        <Footer />
      </DeviceContextProvider>
    </BrowserRouter>
  );
}
