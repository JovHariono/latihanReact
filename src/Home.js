import { useState, useEffect } from "react";
import BlogList from "./blogList";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/blogs1", {
        withCredentials: true,
      })
      .then((res) => {
        setBlogs(res.data);
        setIsPending(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
