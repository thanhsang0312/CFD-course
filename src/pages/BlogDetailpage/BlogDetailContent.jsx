import { Empty } from "antd";
import React from "react";

const BlogDetailContent = ({ id, image, description, loading = true }) => {
  return (
    <>
      {!!id && (
        <div
          className={`blogdetail__content ${
            loading ? "is-loading" : "is-loaded"
          }`}
        >
          {!!image && <img src={image} alt="Post thumnail" />}
          {!!description && (
            <div
              className="blogdetail__content-entry"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          )}
          <div className="blogdetail__line" />
          <div className="blogdetail__content-social btngroup">
            <a href="#" className="btn btn-fb">
              <img src="/img/icon-fb-share.svg" alt />
              <span>Share</span>
            </a>
            <a href="#" className="btn btn-linkedin">
              <img src="/img/icon-in-share.svg" alt />
              <span>Share</span>
            </a>
          </div>
        </div>
      )}
      {!loading && !id && (
        <Empty description="Không tìm thấy nội dung bài viết" />
      )}
    </>
  );
};

export default BlogDetailContent;
