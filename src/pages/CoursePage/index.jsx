import React from "react";
import { Link } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/courseSevice";
import useDebounce from "../../hooks/useDebounce";
import { Empty, Skeleton } from "antd";
import CourseItem from "../../components/CourseItem";

const CoursesPage = () => {
  const { data: coursesData, loading: apiLoading } = useQuery(
    courseService.getCourses
  );
  const courses = coursesData?.data?.courses || [];

  console.log("courses", courses);

  const loading = useDebounce(apiLoading, 300);
  return (
    <main className="mainwrapper courses --ptop">
      <div className="container">
        <div className="textbox">
          <div className="container">
            <h2 className="title --t2">Tất cả khoá học</h2>
          </div>
        </div>
        <div className="courses__list">
          {!loading && courses?.length === 0 && (
            <Empty
              description="Không tìm thấy dữ liệu nào"
              style={{ margin: "0 auto" }}
            />
          )}
          {loading &&
            Array(4)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="courses__list-item"
                  style={{
                    height: "50vh",
                  }}
                >
                  <Skeleton active />
                  <br />
                  <Skeleton active />
                </div>
              ))}
          {courses?.length > 0 &&
            !loading &&
            courses.map((course, index) => {
              return <CourseItem key={course?.id || index} {...course} />;
            })}
        </div>
      </div>
    </main>
  );
};

export default CoursesPage;
