# Source Code Documentation

## Catalog

### `assets`
- [`Icons.js`](#icons)
  - Exports all .svg, .png and .jpeg extensions files into variables or components
  - Other asset files that wasn't converted into variables or components for CSS usage

### `components`
- [`GreetingHeading.js`](#greetingheading) 
  - The heading on every page that greets the user or describes the page to user
- [`NavBar.js`](#navbar)
  - The navigation bar displayed in the application
- [`ProfessorLoginForm.js`](#professorloginform)
  - The login form dedicated to the use of the professor role
- [`ProfessorSignUpForm.js`](#professorsignupform)
  - The sign up form dedicated to the use of the professor role
- [`SettingsButton.js`](#settingsbutton)
  - The button that takes the user to the application settings / user configuration
- [`StudentLoginForm.js`](#studentloginform)
  - The login form dedicated to the use of the student role
- [`StudentSignUpForm.js`](#studentsignupform)
  - The sign up form dedicated to teh use of the student role
- [`TempoChart.js`](#tempochart)
  - The visual representation of tempo data sent from the backend
- [`TimesCompleted.js`](#timescompleted)
  - The representation of analysis on the overview performance on tempo criteria
- [`ToggleSwitch.js`](#toggleswitch)
  - The switch that is used in the settings to determine on and off states of each configuration

### `data`
- [`repository.js`](#repository)
  - Functions used to communicate with backend using [Axios](https://axios-http.com/docs/intro)

### `models`

### `pages`
- [`Assignments.js`](#assignments)
  - The page to display both assignments page (only displayed for the professor role)
- [`FAQ.js`](#faq)
  - The frequently asked question page that is available for both the student and the professor role
- [`Gallery.js`](#gallery)
  - The gallery page that is displayed only on the professor role's application
- [`Home.js`](#home)
  - The landing page after the user has to the application. Content of the page may differ depending on the user's role
- [`Inbox.js`](#inbox)
  - The inbox page for all students and professor to communicate with each other. Content of the page may doffer depending on the user's role
- [`Landing.js`](#landing)
  - The landing page of the application
- [`Library.js`](#library)
  - The library page displayed only on the student role's application
- [`Login.js`](#login)
  - The login page for user to log in. The content of this page may differ depending on the user's role
- [`Settings.js`](#settings)
  - The settings page for user to configure profile and application settings for both the student and professor role
- [`Signup.js`](#signup)
  - The sign up page for user to sign up. The content of this page differ depending on the user's role
- [`Student.js`](#student)
  - The page for professors to manage list of students, this page is only displayed on the professor role's application
- [`Studio.js`](#studio)
  - The studio page that is displayed only on the student role's application
- [`UserSelection.js`](#userselection)
  - The page for any user to select their role to logged in. A user can choose to log in as a professor or a student. Each account is only associated with one role

### `resources`
- [`metricsData.js`](#metricsdata)
  - A collection of sample data exported as variables for purpose of demonstration

### `root/src`
- `AppRouter.js`
  - The router that handles all the routes in the application
- `index.js`
  - The entry point of the application
- `index.css`
  - The CSS file that contains all the CSS styling for the application
- `package.json`
  - The file that contains all the dependencies and scripts for the application

## List of All Components

### Icons

#### Image Components
- `HomeIcon`
- `StudioIcon` 
- `InboxIcon`
- `LibraryIcon`
- `LogOutIcon`
- `SettingsIcon`
- `dropDownIcon`
- `UserIcon`
- `EditIcon`
- `FAQIcon`
- `StudentsIcon`
- `AssignmentsIcons`
- `GalleryIcon`
- `NoStudentsInClass`

#### Image Variables
- `MSLLogo`
- `noResultsIcon`
- `studentIcon`
- `professorIcon`
- `categoryTitle`

---
### GreetingHeading

#### Component Props
- `props.heading<String>`
  - The main heading to be displayed
- `props.subheading<String>`
  - Optional subheading to be displayed below the heading

---
### LogoutButton

#### Component Props
- `props.logoutButtonHidden<Boolean>`
  - A boolean indicating whether the logout button should be hidden or not

#### Variables
- `logoutButtonHidden<Boolean>`
  - A boolean constant to store `props.logOutButtonHidden`

---
### NavBar

#### Variables
- `location<String>`
  - The current position of the user
- `screenWidth<Integer>`
  - The width of the current window
- `userRole<String>`
  - The role of the logged in user, either 'Student' or 'Professor'

#### State Variables
- `navBarExpanded<Boolean>`
  - The state whether the navigation bar is expanded or collapsed

#### Functions
- `setNavBarExpanded()`
  - Negates (flips) the boolean value of navBarExpanded
  - `@param state<Boolean>`
    - The state whether the navigation bar is expanded or collapsed
  - `@return none`
- `toggleNavBar()`
  - Expands/Collapses navigation bar
  - `@param none`
  - `@return none`

---
### ProfessorLoginForm

#### Variables
- `userRole<String>`
  - The user's logged in role, either 'Student' or 'Professor'
  
#### State Variables
- `credentials<Object>`
  - An object that holds a user's email and password
  - `email<String>`
  - `password<String>`
- `errorMessages<Object>`
  - An object that holds error messages corresponding to each field in the credentials
  - `email<String>`
  - `password<String>`

#### Functions
- `setCredentials()`
  - Updates `credentials`
  - `@param Object`
    - Object that holds updated user credentials
  - `@return none`
- `setErrorMessages()`
  - Updates `errorMessages`
  - `@param Object`
    - Object that holds error messages corresponding to user each field of `credentials`
  - `@return none`
- `handleInputChange()`
  - Handles input change and updates `credentials` on change
  - If any field is empty, updates `errorMessages`
  - `@param event<Object>`
    - The event object of user making changes on input fields
  - `@return none`
- `handleLogin()`
  - Handles professor login
  - `@param event<Object>`
    - The event object of user making changes on input fields
  - `@return none`

---
### ProfessorSignUpForm

#### State Variables
- `errorMessages<Object>`
  - Object that holds error messages corresponding to each field of `professorDetails`
  - `firstName<String>`
  - `lastName<String>`
  - `email<String>`
  - `school<String>`
  - `password<String>`
- `professorDetails<Object>`
  - Object that holds professor details when a user is signing up
  - `firstName<String>`
  - `lastName<String>`
  - `email<String>`
  - `school<String>`
  - `password<String>`

#### Functions
- `handleInputChange()`
  - `@param event<Object>`
    - The event object of the user changing the inputs
    - Updates `errorMessages` if any field is empty
  - `@return none`
- `handleSignUp()`
  - `@param event<Object>`
    - The event object of the user submitting the form
    - Signs a user up for the professor role if all fields are validated
  - `@return none`

---
### SettingsButton
---
### StudentLoginForm

#### State Variables
- `errorMessages<Object>`
  - Object that holds error messages corresponding to each field of `professorDetails`
  - `email<String>`
  - `password<String>`
- `credentials<Object>`
  - Object that holds professor details when a user is signing up
  - `email<String>`
  - `password<String>`

#### Functions
- `handleInputChange()`
  - `@param event<Object>`
    - The event object of the user changing the inputs
    - Updates `errorMessages` if any field is empty
  - `@return none`
- `handleSignUp()`
  - `@param event<Object>`
    - The event object of the user submitting the form
    - Signs a user up for the professor role if all fields are validated
  - `@return none`

---
### StudentSignupForm

#### State Variables
- `errorMessages<Object>`
  - Object that holds error messages corresponding to each field of `student         Details`
  - `email<String>`
  - `password<String>`
- `studentDetails<Object>`
  - Object that holds professor details when a user is signing up
  - `email<String>`
  - `password<String>`

#### Functions
- `handleInputChange()`
  - `@param event<Object>`
    - The event object of the user changing the inputs
    - Updates `errorMessages` if any field is empty
  - `@return none`
- `handleSignUp()`
  - `@param event<Object>`
    - The event object of the user submitting the form
    - Signs a user up for the professor role if all fields are validated
  - `@return none`

---
### TempoChart

#### Component Props
- `props.originalData<Array<Array<Integer>>>`
  - The tempo data for the original track in 2/4 time signature
- `props.exerciseData1<Array<Array<Integer>>>`
  - The tempo data for the first performance for any exercise in 2/4 time signature
- `props.exerciseData1Performance2<Array<Array<Integer>>>`
  - The tempo data for the second performance for any exercise in 2/4 time signature
- `props.originalData2<Array<Array<Integer>>>`
  - The tempo data for the original track in 4/4 time signature
- `props.exerciseData2<Array<InteArray<Integer>ger>>`
  - The tempo data for the first performance for any exercise in 4/4 time signature
- `props.exerciseData2Performance2<Array<Array<Integer>>>`
  - The tempo data for the second performance for any exercise in 4/4 time signature
- `props.exercise<Integer>`
  - The exercise number to be displayed in the chart
- `props.selectedRecords<Array<String>`
  - The history records selected to be displayed in the chart
- `props.zoom<Integer>`
  - The zoom scale 

#### Variables
- `originalData<Array<Object>>`
  - The constant variable to store `props.originalData` after converting Integer values into Object values with x and y properties
- `exerciseData1<Array<Integer>>`
  - The constant variable to store `props.exerciseData1` after converting Integer values into Object values with x and y properties
- `exerciseData1Performance2<Array<Integer>>`
  - The constant variable to store `props.exerciseData1Performance2` after converting Integer values into Object values with x and y properties
- `originalData2<Array<Integer>>`
  - The constant variable to store `props.originalData2` after converting Integer values into Object values with x and y properties
- `exerciseData2<Array<Integer>>`
  - The constant variable to store `props.exerciseData2` after converting Integer values into Object values with x and y properties
- `exerciseData2Performance2<Array<Integer>>`
  - The constant variable to store `props.exerciseData2Performance2` after converting Integer values into Object values with x and y properties
- `exercise<Integer>`
  - The constant variable to store `props.exercise`
- `selectedRecords<Array<String>>`
  - The constant variable to store `props.selectedRecords`
- `zoom<Integer>`
  - The constant variable to store `props.zoom`
- `originalDynamics<Array<Object>>`
  - The constant variable to store dynamics after converting Integer values from `originalData` into Object values with x and y properties
- `performance1Dynamics<Array<Object>>`
  - The constant variable to store dynamics after converting Integer values from `exerciseData1` into Object values with x and y properties
- `performance2Dynamics<Array<Object>>`
  - The constant variable to store dynamics after converting Integer values from `exerciseData1Performance2` into Object values with x and y properties
- `initialReveal<Object>`
  - The data of the initial beat of the performance data
- `initialReveal2<Object>`
  - The data of the initial beat of the second performance data

---
### TimesCompleted

#### Component Props
- `props.completed<Integer>`
  - The number of times the exercise has been completed
- `props.failed<Integer>`
  - The number of times the exercise has been failed

#### Variables
- `myData<Array<Object>>`
  - The constant variable to store the data of the chart with angle property
- `colourRange<Array<String>>`
  - The constant variable to store the colour range of the chart in reverse order as opposed to the order of `myData`

---
### ToggleSwitch

#### Component Props
- `switchStatus<Boolean>`
  - The status of the switch, either on or off

#### State Variables
- `isOn<Boolean>`
  - The constant variable to store `switchStatus`

#### Functions
- `setIsOn()`
  - Negates (flips) the boolean value of `isOn`
  - `@param state<Boolean>`
    - The state whether the switch is on or off
  - `@return none`
- `toggleSwitch()`
  - Flips the switch
  - `@param none`
  - `@return none`

---
### Repository

#### API URLs
- `CREATE_NEW_ACCOUNT_API_URL<String>`
  - The URL to create a new account
- `STUDENT_LOG_IN_API_URL<String>`
  - The URL to log in as a student
- `TEST_PROF_SIGNUP_API_URL<String>`
  - The URL to sign up as a professor
- `TEST_PROF_LOGIN_API_URL<String>`
  - The URL to log in as a professor
- `GET_PROFESSOR_BY_EMAIL_API_URL<String>`
  - The URL to get a professor by email

#### Functions
- `createStudentAccount()`
  - Creates a new student account
  - `@param user<Object>`
    - The details of the student to be created
  - `@return Promise`
    - The promise of the request
- `createProfessorAccount()`
  - Creates a new professor account
  - `@param user<Object>`
    - The details of the professor to be created
  - `@return Promise`
    - The promise of the request
- `studentLogIn()`
  - Logs in as a student
  - `@param credentials<Object>`
    - The credentials of the student to be logged in
  - `@return Promise`
    - The promise of the request
- `professorLogIn()`
  - Logs in as a professor
  - `@param credentials<Object>`
    - The credentials of the professor to be logged in
  - `@return Promise`
    - The promise of the request
- `getProfessorByEmail()`
  - `@param email<String>`
    - The email of the professor to be retrieved
  - `@return Promise`
    - The promise of the request

--- 
### Assignments

#### Variables
- `userRole<String>`
  - The role of the logged in user, either 'Student' or 'Professor'

#### State Variables
- `searchTerm<String>`
  - The search term to filter assignments
- `sortBy<String>`
  - The criteria to sort assignments
- `expandedRows<Object>`
  - The rows that are expanded

#### Functions
- `setSearchTerm()`
  - Sets `searchTerm`
  - `@param searchTerm<String>`
    - The search term to filter assignments
  - `@return none`
- `setSortBy()`
  - Sets `sortBy`
  - `@param sortBy<String>`
    - The criteria to sort assignments
  - `@return none`
- `setExpandedRows()`
  - Sets `expandedRows`
  - `@param expandedRows<Object>`
    - The rows that are expanded
  - `@return none`
- `handleSearchInputChange()`
  - Updates `searchTerm` on change
  - `@param event<Object>`
    - The event object of user making changes on input fields
  - `@return none`
- `handleSortByClick()`
  - Updates `sortBy` on change
  - `@param option<String>`
    - The event object of user making changes on input fields
  - `@return none`
- `handleRowToggle()`
  - Updates `expandedRows` on change
  - `@param row<Object>`
    - The event object of user making changes on input fields
  - `@return none`

--- 
### FAQ

#### Variables
- `userRole<String>`
  - The role of the logged in user, either 'Student' or 'Professor'

---
### Gallery

---
### Home

#### Variables
- `userRole<String>`
  - The role of the logged in user, either 'Student' or 'Professor'
- `user<Object>`
  - The details of the logged in user

#### State Variables
- `selectedClass<String>`
  - The class selected by the professor role
  - Only rendered if the user is a professor
- `selectedExercise<String>`
  - The exercise selected by the student role
  - Only rendered if the user is a student
- `selectedMetrics<String>`
  - The selected metrics to be displayed in the chart
  - Only rendered if the user is a student
  - Default value is set to be "Intonation"
- `selectedEvolution<String>`
  - The selected evolution to be displayed in the chart
  - Only rendered if the user is a student
  - Default value is set to be "Evolution"
- `selectedRecords<Array<String>>`
  - The selected records to be displayed in the chart
  - Only rendered if the user is a student
- `zoom<Integer>`
  - The zoom scale of the chart
  - Only rendered if the user is a student
  - Default value is set to be 2

#### Functions
- `setSelectedClass()`
  - Sets `selectedClass`
  - `@param selectedClass<String>`
    - The class selected by the professor role
  - `@return none`
- `setSelectedExercise()`
  - Sets `selectedExercise`
  - `@param selectedExercise<String>`
    - The exercise selected by the student role
  - `@return none`
- `setSelectedMetrics()`
  - Sets `selectedMetrics`
  - `@param selectedMetrics<String>`
    - The selected metrics to be displayed in the chart
  - `@return none`
- `setSelectedEvolution()`
  - Sets `selectedEvolution`
  - `@param selectedEvolution<String>`
    - The selected evolution to be displayed in the chart
  - `@return none`
- `setSelectedRecords()`
  - Sets `selectedRecords`
  - `@param selectedRecords<Array<String>>`
    - The selected records to be displayed in the chart
  - `@return none`
- `setZoom()`
  - Updates `zoom` on change
  - `@param zoom<Integer>`
    - The zoom scale of the chart
  - `@return none`
- `selectRecord()`
  - Selects a record to be displayed in the chart on change
  - `@param event<Object>`
    - The event object of user making changes on input fields
  - `@return none`
- `zoomIn()`
  - Zooms in on exercise metrics chart by one scale at a time
  - `@param none`
  - `@return none`
- `zoomOut()`
  - Zooms out on exercise metrics chart by one scale at a time
  - `@param none`
  - `@return none`
- `handleClassChange()`
  - Handles change of class code on change
  - `@param classCode<String>`
    - The selected class code
  - `@return none`
- `handleExerciseChange()`
  - Handles change of exercise number on change
  - `@param none`
  - `@return none`
- `handleMetricsChange()`
  - Handles change of metrics on change
  - `@param metrics<String>`
    - The selected metrics
  - `@return none`
- `handleEvolutionChange()`
  - Handles change of evolution on change
  - `@param input<String>`
    - The selected evolution
  - `@return none`

--- 
### Inbox

--- 
### Landing

---
### Library

---
### Login

#### Variables
- `userRole<String>`
  - The role of the logged in user, either 'Student' or 'Professor'
  - Determines which form to be displayed

---
### Settings

#### Variables
- `userRole<String>`
  - The role of the logged in user, either 'Student' or 'Professor'

#### State Variables
- `categorySelected<String>`
  - The category selected by the user
  - Default value is set to be "Profile"
- `language<String>`
  - The language selected by the user
  - Default value is set to be "Device"
- `privacy<Object>`
  - The privacy selected by the user
  - Default value is set to be "Public"
  - properties (DEFAULT VALUES ARE SET TO BE TRUE):
    - `strictlyNecessary<Boolean>`
    - `performance<Boolean>`
    - `functional<Boolean>`
    - `targeting<Boolean>`
- `editingEmail<Boolean>`
  - The state whether the user is editing email
  - Default value is set to be false
- `editingPassword<Boolean>`
  - The state whether the user is editing password
  - Default value is set to be false
- `editingUsername<Boolean>`
  - The state whether the user is editing username
  - Default value is set to be false
- `accountInformation<Object>`
  - The account information of the user
  - properties:
    - `email<String>`
    - `password<String>`
    - `username<String>`
- `editingProfile<Boolean>`
  - The state whether the user is editing profile
  - Default value is set to be false
- `profile<Object>`
  - The profile of the user
  - properties:
    - `name<String>`
    - `lastName<String>`
    - `institution<String>`
    - `program<String>`

#### Functions
- `setCategorySelected()`
  - Sets `categorySelected`
  - `@param categorySelected<String>`
    - The category selected by the user
  - `@return none`
- `setLanguage()`
  - Sets `language`
  - `@param language<String>`
    - The language selected by the user
  - `@return none`
- `setPrivacy()`
  - Sets `privacy`
  - `@param privacy<Object>`
    - The privacy selected by the user
  - `@return none`
- `setEditingEmail()`
  - Toggles (flip) `editingEmail`
  - `@param editingEmail<Boolean>`
    - The state whether the user is editing email
  - `@return none`
- `setEditingPassword()`
  - Toggles (flip) `editingPassword`
  - `@param editingPassword<Boolean>`
    - The state whether the user is editing password
  - `@return none`
- `setEditingUsername()`
  - Toggles (flip) `editingUsername`
  - `@param editingUsername<Boolean>`
    - The state whether the user is editing username
  - `@return none`
- `setAccountInformation()`
  - Sets `accountInformation`
  - `@param accountInformation<Object>`
    - The account information of the user
  - `@return none`
- `setEditingProfile()`
  - Toggles (flip) `editingProfile`
  - `@param editingProfile<Boolean>`
    - The state whether the user is editing profile
  - `@return none`
- `setProfile()`
  - Sets `profile`
  - `@param profile<Object>`
    - The profile of the user
  - `@return none`
- `selectCategory()`
  - Selects a category on change
  - `@param category<String>`
    - The selected category
  - `@return none`
- `selectLanguage()`
  - Selects a language on change
  - `@param language<String>`
    - The selected language
  - `@return none`
- `handlePrivacy()`
  - Updates user's privacy settings
  - `@param strictlyNecessary<Boolean>`
    - The state whether the user allows strictly necessary cookies
  - `@param performance<Boolean>`
    - The state whether the user allows performance cookies
  - `@param functional<Boolean>`
    - The state whether the user allows functional cookies
  - `@param targeting<Boolean>`
    - The state whether the user allows targeting cookies
- `handleAccountInformation()`
  - Updates user's account information
  - `@param event<Object>`
    - The event object of the user submitting the form
  - `@param type<String>`
    - The field of the user's account information to be updated
  - `@return none`
- `handleEditingProfile()`
  - Toggles (flip) `editingProfile`
  - `@param none`
  - `@return none`
- `editProfile()`
  - Updates user's profile
  - `@param event<Object>`
    - The event object of the user submitting the form
    - The form contains the user's profile information
  - `@param type<String>`
    - The field of the user's profile to be updated
  - `@return none`
- `editEmail()`
  - Edits user's email
  - `@param none`
  - `@return none`
- `editPassword()`
  - Edits user's password
  - `@param none`
  - `@return none`
- `editUsername()`
  - Edits user's username
  - `@param none`
  - `@return none`

---
### Signup

#### Variables
- `userRole<String>`
  - The role of the logged in user, either 'Student' or 'Professor'
  - Determines which form to be displayed

---
### Student

#### Variables
- `userRole<String>`
  - The role of the logged in user, either 'Student' or 'Professor'

#### State Variables
- `selectedTab<String>`
  - The tab selected by the user
  - Default value is set to be "First Name"

#### Functions
- `setSelectedTab()`
  - Sets `selectedTab`
  - `@param selectedTab<String>`
    - The tab selected by the user
  - `@return none`
- `handleTabClick()`
  - Updates `selectedTab` on change
  - `@param tab<String>`
    - The tab selected by the user
  - `@return none`

---
### Studio

---
### UserSelection

#### Constants
- `USER_ROLE_KEY<String>`
  - The key to store the user's role in local storage

#### Functions
- `setRole()`
  - Stores the user's role in local storage
  - `@param role<String>`
    - The role of the user

---
### metricsData

#### Variables
- `original<Array<Array<Integer>>>`
  - The tempo data for the original track in 2/4 time signature
- `performance1<Array<Array<Integer>>>`
  - The tempo data for the first performance for any exercise in 2/4 time signature
- `performance1Second<Array<Array<Integer>>>`
  - The tempo data for the second performance for any exercise in 2/4 time signature
- `original2<Array<Array<Integer>>>`
  - The tempo data for the original track in 4/4 time signature
- `performance2<Array<Array<Integer>>>`
  - The tempo data for the first performance for any exercise in 4/4 time signature
- `performance2Second<Array<Array<Integer>>>`
  - The tempo data for the second performance for any exercise in 4/4 time signature
- `performance3<Array<Array<Integer>>>`
  - The tempo data for the third performance for any exercise in 4/4 time signature

---
## Libraries Used
***Please Make Sure to have installed all libraries before running the program***
- [React](https://react.dev/)
- [React-Vis](https://uber.github.io/react-vis/)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://axios-http.com/docs/intro)
- [React-Router-Dom@v6](https://reactrouter.com/web/guides/quick-start)