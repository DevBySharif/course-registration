Use of state in this project:

1. `allCourses` State:
   - `useState([])` initializes an empty array as the initial state value.
This state is used to store an array of all available courses fetched from the `data.json` file.

2. `selectedCourse` State:
   - `useState([])` initializes an empty array as the initial state value.
This state is used to store an array of selected courses that the user has chosen to add to their cart.

3. `totalCredit` State:
   - `useState(0)` initializes the state with the initial value of 0.
This state is used to keep track of the total number of credits for the courses selected by the user.

4. `totalCreditRemaining` State:
   - `useState(20)` initializes the state with the initial value of 20.
This state is used to keep track of the remaining credits that the user can select before reaching the limit of 20 credits.

These states are being updated and used in the `Home` component as follows:

The `allCourses` state is updated within the `useEffect` hook when the data is fetched from the `data.json` file and stored in it.

The `selectedCourse` state is updated within the `handleSelectCourse` function when the user selects a course to add to their cart. It checks if the course is already in the `selectedCourse` array and then updates the state accordingly.

The `totalCredit` state is updated within the `handleSelectCourse` function to keep track of the total credits of the selected courses.

The `totalCreditRemaining` state is updated within the `handleSelectCourse` function to calculate and display the remaining credits that the user can select based on the limit of 20 credits.

