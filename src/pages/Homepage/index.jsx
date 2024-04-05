import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/courseSevice";
import { galleryService } from "../../services/galleryService";
import { questionService } from "../../services/questionService";
import { teamService } from "../../services/teamService";
import SectionAccordion from "./SectionAccordion";
import SectionCourse from "./SectionCourse";
import SectionCourseComing from "./SectionCourseComing";
import SectionFeatured from "./SectionFeatured";
import SectionGallery from "./SectionGallery";
import SectionHero from "./SectionHero";
import SectionRegister from "./SectionRegister";
import SectionTeams from "./SectionTeams";
import SectionTestimonial from "./SectionTestimonial";

const HomePage = () => {
  const { data: coursesData, loading: coursesLoading } = useQuery(
    courseService.getCourses
  );

  const { data: teamsData, loading: teamsLoading } = useQuery(
    teamService.getTeams
  );

  const { data: questionsData, loading: questionLoading } = useQuery(
    questionService.getQuestions
  );

  const { data: galleryData, loading: galleryLoading } = useQuery(
    galleryService.getGalleries
  );

  const courses = coursesData?.data.courses || [];
  const teams = teamsData?.data.teams || [];
  const questions = questionsData?.data.questions || [];
  const galleries = galleryData?.data.galleries?.[0]?.images || [];

  // console.log("galleries", galleries);
  const comingCourse =
    courses.filter((course) => {
      return course?.startDate && new Date(course.startDate) > new Date();
    }) || [];

  return (
    <main className="mainwrapper">
      <SectionHero />
      <SectionCourseComing courses={comingCourse} loading={coursesLoading} />
      <SectionCourse courses={comingCourse} loading={coursesLoading} />
      <SectionTeams teachers={teams} loading={teamsLoading} />
      <SectionFeatured />
      {/* --------------------------------Testimonial-------------------------------- */}
      <SectionTestimonial />
      {/* --------------------------------faq-------------------------------- */}
      <SectionAccordion questions={questions} loading={questionLoading} />
      <SectionGallery galleries={galleries} loading={galleryLoading} />
      <SectionRegister />
    </main>
  );
};

export default HomePage;
