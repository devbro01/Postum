import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from "../slice/article"
import ArticleService from "../service/article"
import { useParams } from "react-router-dom"
import ArticleForm from "./article-form"

const EditArticle = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const dispatch = useDispatch()
  const { slug } = useParams()

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart())
      try {
        const response = await ArticleService.getArticleDetail(slug)
        setTitle(response.article.title)
        setDescription(response.article.description)
        setBody(response.article.body)
        dispatch(getArticleDetailSuccess(response.article))
      } catch (error) {
        dispatch(getArticleDetailFailure())
      }
    }

    getArticleDetail()
    // eslint-disable-next-line
  }, [slug])

  const formSubmit = async (slug) => {
    // try {
    //   await ArticleService.putArticle(slug)
    // } catch (error) {
    //   console.log("Error with put new data", error)
    // }
  }

  const formProps = { title, setTitle, description, setDescription, body, setBody, formSubmit }

  return (
    <div className="text-center">
      <h1 style={{ fontSize: '50px', fontWeight: '600' }}>
        Edit Post
      </h1>
      <div className="w-75 mx-auto">
        <ArticleForm {...formProps} />
      </div>
    </div>
  )
}

export default EditArticle