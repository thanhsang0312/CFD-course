import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import BlogMenu from "./BlogMenu";
import useQuery from "../../hooks/useQuery";
import { blogService } from "../../services/blogService";
import useDebounce from "../../hooks/useDebounce";
import useMutation from "../../hooks/useMutation";

const BlogPage = () => {
  const { data: categoriesData } = useQuery(blogService.getBlogCategories);
  const [categoryId, setCategoryId] = useState("");

  const categories = categoriesData?.data?.blogs;

  const _onChangeId = (id) => {
    setCategoryId(id);
  };

  return (
    <main className="mainwrapper blog --ptop">
      <div className="container">
        <div className="textbox">
          <div className="container">
            <h2 className="title --t2">Blog</h2>
          </div>
        </div>
        <BlogMenu
          categories={categories}
          categoryId={categoryId}
          _onChangeId={_onChangeId}
        />
        <BlogList categoryId={categoryId} />
        <ul className="paging">
          <li>
            <a href="#">
              <i>
                <img src="img/iconprev.svg" alt />
              </i>
            </a>
          </li>
          <li>
            <a href="#" className="active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="img/iconprev.svg" alt />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default BlogPage;
