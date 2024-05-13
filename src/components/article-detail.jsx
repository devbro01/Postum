import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ArticleService from '../service/article'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from '../slice/article'
import { Loader } from '../ui'
import moment from 'moment'

const ArticleDetail = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const { articleDetail, isLoading } = useSelector((state) => state.article)

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart())
      try {
        const response = await ArticleService.getArticleDetail(slug)
        dispatch(getArticleDetailSuccess(response.article))
        // console.log(response.article)
      } catch (error) {
        dispatch(getArticleDetailFailure())
      }
    }

    getArticleDetail()
    // eslint-disable-next-line
  }, [slug])

  return isLoading ? (
    <Loader />
  ) : (
    articleDetail !== null && (
      <>
        {/* created user */}
        <div className="col-md-6">
          <div className="row g-0 border rounded-5 overflow-hidden flex-md-row mb-4 shadow h-md-250 position-relative bg-dark">
            <div className="col p-4 d-flex flex-column position-static">
              <div>
                <i className="fa-solid fa-user text-primary mx-1"></i>
                <strong className="d-inline-block mb-2 text-primary text-uppercase">{articleDetail.author.username}</strong>
              </div>
              <hr className="border border-light border-2 opacity-20 mb-1 mt-2" />
              <p className="text-light m-0">Bio:</p>
              <p className="card-text mb-auto text-light opacity-75">{articleDetail.author.bio}</p>
            </div>
            <div className="col-auto d-none d-lg-block">
              {/* ------ svg start ------ */}
              <svg
                className="d-flex align-items-center justify-content-center bd-placeholder-img"
                width="200"
                height={'100%'}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="rgba(22, 104, 245, 0.8)"></rect>
                <text
                  x={'50%'}
                  y={'50%'}
                  fill={'#fff'}
                  className="text-uppercase"
                  style={{ fontSize: '65px', dominantBaseline: 'middle', textAnchor: 'middle' }}
                >
                  {articleDetail.author.username[0]}
                </text>
              </svg>
              {/* ------ svg end ------ */}
            </div>
          </div>
        </div>
        {/* post detail */}
        <h1 className="fw-bold mx-5">Post:</h1>
        <div className="p-5 mb-4 bg-dark rounded-5 text-light shadow">
          <div className="container-fluid py-5">
            <h1 className="h6 m-0 opacity-50">Title:</h1>
            <h1 className="display-5 fw-bold">{articleDetail.title}</h1>
            <h1 className="h6 m-0 opacity-50">Description:</h1>
            <p className="col-md-8 fs-4">{articleDetail.description}</p>
            <hr className="border border-light border-2 opacity-20"></hr>
            <h1 className="h6 m-0 opacity-50">Post:</h1>
            <p className="fw-light">{articleDetail.body}</p>
          </div>
          <p className="text-light w-100 text-end mt-2">
            <span>Created at: {moment(articleDetail.createdAt).format('DD, MM, YYYY')}</span>
          </p>
        </div>
      </>
    )
  )
}

export default ArticleDetail
