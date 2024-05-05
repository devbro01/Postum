import { Routes, Route } from 'react-router-dom';
import { Main, Login, Register, Navbar } from './components';
import { useEffect } from 'react';
import AuthService from './service/auth';
import { useDispatch } from 'react-redux';
import { signUserSuccess } from './slice/auth';
import { getItem } from './helpers/storage';
import ArticleService from './service/article';

function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      console.log(error);
    }
  };

  const getArticles = async () => {
    try {
      const response = await ArticleService.getArticles();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // check token aviability
    const token = getItem('token');
    if (token) {
      getUser();
    }
    getArticles();
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
