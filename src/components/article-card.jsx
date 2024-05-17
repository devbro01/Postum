import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ArticleService from "../service/article"

const ArticleCard = (props) => {
    const navigate = useNavigate()
    const { user, loggedIn } = useSelector((store) => store.auth)
    const {item, getArticles} = props

    const deleteArticle = async (slug) => {
        try {
            await ArticleService.deleteArticle(slug)
            getArticles()
        } catch (error) {
            console.log("delete article error:", error);
        }
    }

    return (
        <div className="col">
            <div className="card shadow h-100">
                <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#F55555" />
                </svg>
                <div className="card-body">
                    <p className="card-text fw-semibold m-0">{item.title}</p>
                    <hr />
                    <p className="card-text fw-light">{item.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button
                            onClick={() => {
                                navigate(`/article/${item.slug}`)
                            }}
                            type="button"
                            className="btn btn-sm btn-success"
                        >
                            View
                        </button>
                        {loggedIn && user.username === item.author.username && (
                            <>
                                <button type="button" className="btn btn-sm btn-warning" onClick={() => navigate(`/edit-article/${item.slug}`)}>
                                    Edit
                                </button>
                                <button type="button" className="btn btn-sm btn-danger" onClick={() => deleteArticle(item.slug)}>
                                    Delete
                                </button>
                            </>
                        )}

                    </div>
                    <div className="text-body-secondary text-capitalize">
                        <i className="fa-solid fa-user mx-1" />
                        {item.author.username}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard