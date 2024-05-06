import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch } from "react-redux";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
} from "../slice/article";

const Article = () => {
  const { slug } = useParams();
  const dispatch = useDispatch((state) => state.article);

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart());
      try {
        const response = await ArticleService.getArticleDetail(slug);
        dispatch(getArticleDetailStart(response));
      } catch (error) {
        dispatch(getArticleDetailFailure());
      }
    };

    getArticleDetail();
  }, [slug]);

  return <div>slug: {slug}</div>;
};

export default Article;
