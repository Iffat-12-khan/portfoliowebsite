import "./Projects.css";

function Projects() {
  return (
    <div className="projects">

      <h2>My Projects</h2>

      <div className="project-container">

        {/* Project 1 */}

        <div className="project-card">

          <h3>To-Do Application</h3>

          <p>
            Developed a responsive To-Do application using React.
            Users can add new tasks, delete tasks, mark tasks as completed,
            and view the date and time each task was created.
            Implemented React Hooks (useState) and interactive UI using CSS.
          </p>

          <h4>Technologies Used</h4>

          <span>React • JavaScript • HTML • CSS</span>

        </div>

        {/* Project 2 */}

        <div className="project-card">

          <h3>Deadlock Detection & Cybersecurity Monitoring System</h3>

          <p>
            Developing a Java console application integrated with MySQL
            to simulate cloud resource allocation, detect deadlocks,
            monitor cybersecurity threats, and generate reports.
            The project demonstrates concepts of operating systems,
            databases, cloud computing, and cybersecurity.
          </p>

          <h4>Technologies Used</h4>

          <span>Java • JDBC • MySQL</span>

        </div>

        {/* Project 3 */}

        <div className="project-card">

          <h3>Penny-Wise Expense Tracker</h3>

          <p>
            Developed a web application that allows users to manage
            daily expenses through CRUD operations. Users can view
            expenses on a daily, weekly, monthly, and yearly basis.
            Implemented form validations using jQuery.
          </p>

          <h4>Technologies Used</h4>

          <span>PHP • MySQL • HTML • CSS • JavaScript • jQuery</span>

        </div>

        {/* Project 4 */}

        <div className="project-card">

          <h3>Excel Import Utility</h3>

          <p>
            Developed a utility that enables users to upload Excel files
            and import data into a MySQL database.
            Implemented validation to prevent duplicate records
            and ensure accurate data insertion.
          </p>

          <h4>Technologies Used</h4>

          <span>PHP • MySQL • HTML • CSS • JavaScript</span>

        </div>

      </div>

    </div>
  );
}

export default Projects;