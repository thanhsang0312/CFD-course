import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BlogItem from "../../components/BlogItem";
import useQuery from "../../hooks/useQuery";
import { blogService } from "../../services/blogService";
import useMutation from "../../hooks/useMutation";
import useDebounce from "../../hooks/useDebounce";
import { Empty } from "antd";

const BlogList = ({ categoryId }) => {
  const query = categoryId ? `?category=${categoryId}` : "";
  const {
    data: blogsData,
    loading: blogsLoading,
    execute: getBlogsByCategory,
    setData,
  } = useMutation((query) => blogService.getListBlogs(query));

  const loadingDebounce = useDebounce(blogsLoading, 300);
  const blogs = blogsData?.blogs || {};
  const onFail = (error) => {
    if (error?.response?.status === 404) {
      setData([]);
    }
  };

  useEffect(() => {
    getBlogsByCategory(query, {
      onFail: onFail,
    });
  }, [query]);
  return (
    <>
      {!!blogs?.length && (
        <div
          className={`blog__list ${
            loadingDebounce ? "is-loading" : "is-loaded"
          }`}
        >
          {blogs.map((blog) => (
            <BlogItem key={blog?.id} {...blog} />
          ))}
        </div>
      )}
      {!loadingDebounce && !blogs?.length && (
        <Empty description="Không tìm thấy bài viết nào!" />
      )}
    </>
  );
};

export default BlogList;
