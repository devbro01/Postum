import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ArticleService from '../service/article'
import { useDispatch } from 'react-redux'
import {
    getArticleDetailFailure,
    getArticleDetailStart,
    getArticleDetailSuccess,
} from '../slice/article'

const Article = () => {
    const { slug } = useParams()
    const dispatch = useDispatch((state) => state.article)

    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailStart())
            try {
                const response = await ArticleService.getArticleDetail(slug)
                dispatch(getArticleDetailSuccess(response))
            } catch (error) {
                dispatch(getArticleDetailFailure())
            }
        }

        getArticleDetail()
    }, [slug])

    return <>slug: {slug}</>
}

export default Article
