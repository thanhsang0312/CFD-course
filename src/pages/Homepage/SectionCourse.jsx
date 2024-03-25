import React from "react";
import { Link } from "react-router-dom";
import CourseItem from "../../components/CourseItem";

const SectionCourse = ({ courses = [], loading = false }) => {
  return (
    <section className="courses">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">
            Tất cả <span className="color--primary">khóa học</span>
          </h2>
        </div>
        {courses?.length > 0 && (
          <div className="courses__list">
            {!loading && courses?.length === 0 && (
              <Empty
                description="Không tìm thấy dữ liệu nào"
                style={{ margin: "0 auto" }}
              />
            )}
            {courses?.length > 0 &&
              !loading &&
              courses.map((course, index) => {
                return <CourseItem key={course?.id || index} {...course} />;
              })}
          </div>
        )}
        <div className="courses__btnall">
          <Link to="/course" className="course__btn btn btn--grey">
            Tất cả khoá học
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionCourse;
