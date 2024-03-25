import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import CourseItem from "../../components/CourseItem";
import { CourseTypes } from "../../const/generals";

const MyCourse = () => {
  const { courseInfo, handleGetProfileCourse } = useAuthContext();

  useEffect(() => {
    if (courseInfo?.length === 0) {
      handleGetProfileCourse();
    }
  }, []);

  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      <div className="courses__list">
        {!!!courseInfo.length && <p>Không có dữ liệu.</p>}
        {!!courseInfo.length &&
          courseInfo.map((item, index) => (
            <CourseItem
              key={item.id || new Date().getTime() + index}
              type={CourseTypes.normal}
              {...item?.course}
            />
          ))}
      </div>
    </div>
  );
};

export default MyCourse;
