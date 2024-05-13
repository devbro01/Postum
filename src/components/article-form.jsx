import React from 'react'
import { Input, TextArea } from '../ui'
import { useSelector } from 'react-redux'

const ArticleForm = (props) => {
    const { title, setTitle, desciption, setDescription, body, setBody, formSubmit } = props
    const { isLoading } = useSelector((state) => state.article)

    return (
        <form onSubmit={formSubmit}>
            <Input label={'Title'} state={title} setState={setTitle} />
            <TextArea label={'Description'} state={desciption} setState={setDescription} />
            <TextArea label={'Body'} state={body} setState={setBody} height={300} />
            <button
                className="btn btn-primary w-100 my-3 btn-lg"
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? <i className="fa-solid fa-cloud-arrow-up fa-bounce"></i> : ('Create')}
            </button>
        </form>
    )
}

export default ArticleForm
