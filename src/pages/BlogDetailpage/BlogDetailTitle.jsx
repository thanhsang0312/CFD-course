import moment from "moment";
import React from "react";

const BlogDetailTitle = ({ name, author, createdUser, createdAt }) => {
  return (
    <div className="blogdetail__title">
      <h1 className="title --t2">{name}</h1>
      <ul className="meta">
        {!!author && <li className="meta__item">Đăng bởi {author}</li>}
        {!!createdUser && <li className="meta__item">{createdUser?.name}</li>}
        {!!createdAt && (
          <li className="meta__item">
            {moment(createdAt).format("DD/MM/YYYY")}
          </li>
        )}
      </ul>
    </div>
  );
};

export default BlogDetailTitle;
