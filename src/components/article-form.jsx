import React from 'react'
import { Input, TextArea } from '../ui'
import { useSelector } from 'react-redux'

const ArticleForm = (props) => {
    const { title, setTitle, description, setDescription, body, setBody, formSubmit, primary = false } = props
    const { isLoading } = useSelector((state) => state.article)

    return (
        <form onSubmit={formSubmit}>
            <Input label={'Title'} state={title} setState={setTitle} />
            <TextArea label={'Description'} state={description} setState={setDescription} />
            <TextArea label={'Body'} state={body} setState={setBody} height={300} />
            <button
                className={`btn w-100 my-3 btn-lg ${primary ? 'btn-primary' : 'btn-warning'}`}
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? <i className="fa-solid fa-cloud-arrow-up fa-bounce" /> : (`Create`)}
            </button>
        </form >
    )
}

export default ArticleForm
