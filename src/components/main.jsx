import { useSelector } from "react-redux";
import { Loader } from "../ui";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const { articles, isLoading } = useSelector((store) => store.article);
  const navigate = useNavigate();

  return (
    <>
      <div className="album py-5">
        {isLoading && <Loader />}
        <div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {articles.map((item) => (
              <div className="col" key={item.id}>
                <div className="card shadow-sm h-100">
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
                          navigate(`/article/${item.slug}`);
                        }}
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                      <button type="button" className="btn btn-sm btn-danger">
                        Delete
                      </button>
                    </div>
                    <small className="text-body-secondary text-capitalize">
                      <i className="fa-solid fa-user mx-1" />
                      {item.author.username}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
