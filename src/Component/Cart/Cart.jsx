import PropTypes from "prop-types";
const Cart = ({ selectedCourse, totalCredit, totalCreditRemaining }) => {
  console.log(totalCredit, totalCreditRemaining);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-3">
        <div className="card-body">
          <h2 className="text-lg font-bold text-[#2F80ED]">
            Credit Hour Remaining: {totalCreditRemaining} hr
          </h2>
          <hr />
          <div>
            <h2 className="text-xl font-bold mb-4">Course Name</h2>
            {selectedCourse.map((course) => (
              <li key={course.id} className="list-decimal my-2">
                {course.name}
              </li>
            ))}
          </div>
          <hr />
          <h4 className="text-base font-medium">
            Total Credit Hour: {totalCredit}
          </h4>
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  selectedCourse: PropTypes.func.isRequired,
  totalCredit: PropTypes.object,
  totalCreditRemaining: PropTypes.object,
};
export default Cart;
