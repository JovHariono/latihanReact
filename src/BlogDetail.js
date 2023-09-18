import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetail = () => {
  const { id } = useParams();
  const { data, isPending } = useFetch(`http://localhost:8000/blogs/` + id);
  const history = useHistory();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/blogs/` + data.id)
      .then((res) => {        
        history.push("/");
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {data && (
        <article>
          <h2> {data.title} </h2>
          <p> Written by {data.author} </p>
          <div> {data.body} </div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
