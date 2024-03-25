import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import { blogService } from "../../services/blogService";
import { courseService } from "../../services/courseSevice";
import BlogDetailTitle from "./BlogDetailTitle";
import BlogDetailContent from "./BlogDetailContent";
import BlogDetailRelated from "./BlogDetailRelated";
import useDebounce from "../../hooks/useDebounce";

const BlogDetailPage = () => {
  const params = useParams();
  const { blogId } = params;

  const {
    data: blogData,
    loading: blogLoading,
    execute: getBlogDetail,
  } = useMutation(blogService.getBlogBySlug);
  const blogProps = blogData || {};
  const categoryId = blogProps?.category?.id;
  const query = categoryId ? `?limit=3&category=${categoryId}` : `?limit=3`;

  const {
    data: blogsRelated,
    loading: blogsRelatedLoading,
    execute: getBlogsRelated,
  } = useMutation((query) => blogService.getListBlogs(query));

  const loadingApi = blogLoading || blogsRelatedLoading;
  const loadingPage = useDebounce(loadingApi, 300);

  useEffect(() => {
    !!blogId && getBlogDetail(blogId);
  }, [blogId]);

  useEffect(() => {
    getBlogsRelated(query);
  }, [query]);

  return (
    <main className="mainwrapper blogdetail --ptop">
      <div className="container">
        <div className="wrapper">
          <BlogDetailTitle {...blogProps} />
          <BlogDetailContent {...blogProps} loading={loadingPage} />
        </div>
        {categoryId && (
          <BlogDetailRelated
            blogs={blogsRelated?.blogs}
            loading={loadingPage}
          />
        )}
      </div>
    </main>
  );
};

export default BlogDetailPage;
