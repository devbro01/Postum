import { Routes, Route } from 'react-router-dom'
import { Main, Login, Register, Navbar, Article, CraeteArticle } from './components'
import { useEffect } from 'react'
import AuthService from './service/auth'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'
import { getItem } from './helpers/storage'
import ArticleService from './service/article'
import { getArticlesFailure, getArticlesStart, getArticlesSuccess } from './slice/article'

function App() {
  const dispatch = useDispatch()

  // get user from JWT token
  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    // check token aviability
    const token = getItem('token')
    if (token) {
      getUser()
    }
  })

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/create-article" element={<CraeteArticle />} />
      </Routes>
    </div>
  )
}

export default App
