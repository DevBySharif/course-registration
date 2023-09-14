const Cart = ({ selectedCourse }) => {
  console.log(selectedCourse);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-3">
        <div className="card-body">
          <h2 className="card-title inline-block">Credit Hour Remaining: </h2>
          <hr />
          <div>
            <h2>Course Name</h2>
            {selectedCourse.map((course) => (
              <li key={course.id}>{course.name}</li>
            ))}
          </div>
          <hr />
          <h4>Total Credit Hour:</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
