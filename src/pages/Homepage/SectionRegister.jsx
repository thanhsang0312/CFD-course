import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import PATHS from "../../const/paths";

const SectionRegister = () => {
  return (
    <section className="callregister">
      <div className="container">
        <div className="callregister__content">
          <h3 className="title --t2">
            <span className="color--primary">trở thành một phần</span> của CFD
            Circle
          </h3>
          <p>
            Chúng tôi rất vui khi bạn quyết định trở thành một phần của CFD
            Circle để cùng nhau học hỏi, lan toả và chia sẻ những kinh nghiệm
            quý giá cho cộng đồng.
          </p>
          <Button link={PATHS.COURSE.INDEX} className="btn btn--primary">
            Tham gia Khoá học
          </Button>
          <Button link={PATHS.CONTACT} variant="border">
            Liên hệ tư vấn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionRegister;
