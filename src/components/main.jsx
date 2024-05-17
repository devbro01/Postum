import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../ui'
import { useEffect } from 'react'
import { getArticlesFailure, getArticlesStart, getArticlesSuccess } from '../slice/article'
import ArticleService from '../service/article'
import ArticleCard from './article-card'

const Main = () => {
  const { articles, isLoading } = useSelector((store) => store.article)


  const dispatch = useDispatch()

  // get articles
  const getArticles = async () => {
    dispatch(getArticlesStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(getArticlesSuccess(response.articles))
    } catch (error) {
      dispatch(getArticlesFailure(error))
    }
  }

  useEffect(() => {
    getArticles()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="album py-5">
        {isLoading && <Loader />}
        <div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {articles.map((item, getArticles) => (
              <ArticleCard item={item} getArticles={getArticles} key={item.id}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
