import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const { data, isPending } = useFetch(`http://localhost:8000/blogs/` + id);

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { data && (
        <article>
            <h2> { data.title } </h2>
            <p> Written by { data.author } </p>
            <div> { data.body } </div>
        </article>
      ) }
    </div>
  );
};

export default BlogDetail;
