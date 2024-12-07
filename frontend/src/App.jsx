import Home from '@/pages/Home';
import Community from '@/pages/Community';
import SinglePost from '@/pages/SinglePost';
import Post from '@/pages/Post';

import { BrowserRouter, Routes, Route } from 'react-router'

const App = () => {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/community' element={<Community/>} />
            <Route path='/post/:id' element={<SinglePost/>} />
            <Route path='/create' element={<Post/>} />
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App