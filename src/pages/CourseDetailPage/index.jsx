import moment from "moment";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderTop from "../../components/HeaderTop";
import PageLoading from "../../components/PageLoading";
import useDebounce from "../../hooks/useDebounce";
import useMutation from "../../hooks/useMutation";
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/courseSevice";
import { questionService } from "../../services/questionService";
import SectionContentDetail from "./SectionContentDetail";
import SectionCourses from "./SectionCourses";
import SectionFaq from "./SectionFaq";
import SectionFeatured from "./SectionFeatured";
import SectionHero from "./SectionHero";

const CourseDetailPage = () => {
  const params = useParams();
  const { courseId } = params;

  const { data: courseData, loading: courseLoading } = useQuery(
    courseService.getCourses
  );

  const { data: questionData, loading: questionLoading } = useQuery(
    questionService.getQuestions
  );

  const {
    data: courseDetailData,
    loading: courseDetailLoading,
    execute,
  } = useMutation(courseService.getCourseBySlug);

  useEffect(() => {
    if (courseId) execute(courseId || "", {});
  }, [courseId]);

  const questionsData = questionData?.data?.questions || [];
  const coursesData = courseData?.data?.courses || [];
  const orderLink = `/course-order/${courseId}`;

  console.log("orderLink", orderLink);

  console.log("courseDetailData", courseDetailData);
  const { teams, startDate, price } = courseDetailData || {};

  const modifiedProps = {
    ...courseDetailData,
    teacherInfo: teams?.find((item) => item.tags.includes("Teacher")),
    startDate: moment(startDate).format("DD/MM/YYYY"),
    price: price,
    orderLink,
  };

  const apiLoading = courseDetailLoading || questionLoading || courseLoading;

  const pageLoading = useDebounce(apiLoading, 500);

  if (pageLoading) {
    return <PageLoading />;
  }

  return (
    <>
      <HeaderTop {...modifiedProps} />
      <main className="mainwrapper coursedetailpage">
        <SectionHero {...modifiedProps} />
        <SectionContentDetail {...modifiedProps} />
        <SectionFeatured />
        <SectionFaq questions={questionsData} loading={questionLoading} />
        <SectionCourses courses={coursesData} loading={courseLoading} />
      </main>
    </>
  );
};

export default CourseDetailPage;
