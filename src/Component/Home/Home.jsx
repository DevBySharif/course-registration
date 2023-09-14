import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalCreditRemaining, setTotalCreditRemaining] = useState(0);

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
      <h1>Hello World!</h1>
      {/* main container */}
      <div className="flex justify-evenly gap-6">
        {/* card container */}
        <div className="grid grid-cols-3 gap-6">
          {allCourses.map((course) => (
            <div key={course.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={course.course_img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{course.name}</h2>
                <p>{course.details}</p>
                <div className="flex justify-between">
                  <small>Price: ${course.price}</small>
                  <small>Credit: {course.credit}hr</small>
                </div>
                <div className="card-actions">
                  <button
                    onClick={() => handleSelectCourse(course)}
                    className="btn btn-wide btn-success"
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
