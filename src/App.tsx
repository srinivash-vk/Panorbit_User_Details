import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Containers/LandingPage';
import ProfilePage from './Containers/ProfilePage';
import SideBar from './Components/Sidebar';
import PostsPage from './Containers/PostsPage';
import GalleryPage from './Containers/GalleryPage';
import ToDoPage from './Containers/ToDoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route element={<SideBar />}>
          <Route path='/s/profile' element={<ProfilePage />} />
          <Route path='/s/posts' element={<PostsPage />} />
          <Route path='/s/gallery' element={<GalleryPage />} />
          <Route path='/s/todo' element={<ToDoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
