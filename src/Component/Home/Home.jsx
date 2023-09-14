import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);
  console.log(allCourses);
  return (
    <div className="container mx-auto mt-12">
      <h1>Hello World!</h1>
      {/* main container */}
      <div className="flex justify-between">
        {/* card container */}
        <div className="grid grid-cols-3">
          {allCourses.map((course) => (
            <div key={course.id} className="card w-96 bg-base-100 shadow-xl">
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
                  <button className="btn btn-wide btn-success">Select</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* cart container */}
        <div>
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
