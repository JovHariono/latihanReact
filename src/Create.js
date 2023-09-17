import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    axios
      .post("http://localhost:8000/blogs", {
        title,
        body,
        author,
      })
      .then((res) => {
        console.log(res.data);
        setIsPending(false);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create">
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        >
          <option value="">Select Author</option>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
