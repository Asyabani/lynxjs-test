import { root } from '@lynx-js/react'
import { MemoryRouter, Routes, Route } from 'react-router';
import { App } from './App.js'
import  Home  from './screens/Home.js';
import  Alphabet  from './screens/Alphabet.js';
import  Blog  from './screens/Blog.js';

root.render( 
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/alphabet" element={<Alphabet />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </MemoryRouter>,
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
