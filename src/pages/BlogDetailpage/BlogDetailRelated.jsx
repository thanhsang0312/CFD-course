import { Empty } from "antd";
import React from "react";
import BlogItem from "../../components/BlogItem";

const BlogDetailRelated = ({ blogs, loading = true }) => {
  console.log("blogs", blogs);
  return (
    <div className="blogdetail__related">
      <h2 className="blogdetail__related-title title --t2">
        Bài viết liên quan
      </h2>
      <div className={`blog__list ${loading ? "is-loading" : "is-loaded"}`}>
        {blogs?.map((blog) => {
          return <BlogItem key={blog?.id} {...blog} />;
        })}
      </div>

      {!loading && !blogs?.length && (
        <Empty description="Không tìm thấy bài viết liên quan" />
      )}
    </div>
  );
};

export default BlogDetailRelated;
