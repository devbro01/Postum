import { useState } from 'react'
import { ArticleForm } from './'
import ArticleService from '../service/article'
import { useDispatch } from 'react-redux'
import { postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/article'
import { useNavigate } from 'react-router-dom'

const CraeteArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()
        const article = { title, description, body }
        dispatch(postArticleStart())
        try {
            await ArticleService.postArticle(article)
            dispatch(postArticleSuccess())
            navigate('/')
        } catch (error) {
            console.error(error);
            dispatch(postArticleFailure())
        }
    }

    const formProps = { title, setTitle, description, setDescription, body, setBody, formSubmit, primary: true }

    return (
        <div className='text-center'>
            <h1 style={{ fontSize: '50px', fontWeight: '600' }}>
                Create Post
            </h1>
            <div className="w-75 mx-auto">
                <ArticleForm {...formProps} />
            </div>
        </div>
    )
}

export default CraeteArticle
