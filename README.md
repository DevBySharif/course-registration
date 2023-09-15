Here are three key features of this course registration project:

1. Course Selection:
   - Users can browse a list of available courses displayed in a grid layout.
   - Each course is presented with its name, details, price, and credit hours.
   - Users can select courses they are interested in by clicking the "Select" button associated with each course card.

2. Cart and Credit Tracking:
   - The project includes a `Cart` component where selected courses are displayed.
   - As users select courses, the selected courses are added to the cart, and the total credit hours and remaining credit hours are updated in real-time.
   - Users can see how many credits they have selected and how many credits are still available before reaching a limit of 20 credits.

3. Error Handling:
   - The project includes error handling to provide feedback to users when they attempt to add courses in certain scenarios.
   - For example, if a user tries to add a course that has already been selected, they receive an alert indicating that the course is already in their cart.
   - Additionally, if a user attempts to select courses that would exceed the 20-credit limit, they receive an alert indicating that they can't add more than 20 credits.


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

