import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalCreditRemaining, setTotalCreditRemaining] = useState(20);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = selectedCourse.find((item) => item.id == course.id);

    let count = course.credit;

    if (isExist) {
      return alert("Course already selected");
    } else {
      selectedCourse.forEach((item) => {
        count = count + item.credit;
      });

      const totalRemainingCredit = 20 - count;

      if (count > 20) {
        return alert("You can't add more than 20 credit");
      } else {
        setTotalCreditRemaining(totalRemainingCredit);
        setTotalCredit(count);
        setSelectedCourse([...selectedCourse, course]);
      }
    }
  };
  console.log(totalCreditRemaining);
  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold text-center my-12">
        Course Registration
      </h1>
      {/* main container */}
      <div className="flex flex-grow justify-center gap-6">
        {/* card container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map((course) => (
            <div
              key={course.id}
              className="w-[300px] bg-base-100 shadow-xl rounded-lg"
            >
              <figure className="flex justify-center">
                <img src={course.course_img} alt="images" />
              </figure>
              <div className="p-3 space-y-3">
                <h2 className="text-lg font-semibold">{course.name}</h2>
                <p className="text-sm font-normal text-[#5f5f5f] h-[90px]">
                  {course.details}
                </p>
                <div className="flex justify-around">
                  <small>
                    <i className="fa-solid fa-dollar-sign"></i> Price:{" "}
                    {course.price}
                  </small>
                  <small>
                    <i className="fa-solid fa-book-open"></i> Credit:{" "}
                    {course.credit}hr
                  </small>
                </div>
                <div className="card-actions justify-center">
                  <button
                    onClick={() => handleSelectCourse(course)}
                    className="btn-wide bg-[#2F80ED] rounded-md text-white p-2 font-semibold"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* cart container */}
        <div>
          <Cart
            selectedCourse={selectedCourse}
            totalCredit={totalCredit}
            totalCreditRemaining={totalCreditRemaining}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
