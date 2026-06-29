import "./Skills.css";

function Skills() {

  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Java", level: "85%" },
    { name: "MySQL", level: "90%" }
  ];

  return (

    <div className="skills">

      <h2>My Skills</h2>

      {
        skills.map((skill, index) => (

          <div className="skill" key={index}>

            <div className="skill-title">

              <span>{skill.name}</span>

              <span>{skill.level}</span>

            </div>

            <div className="progress">

              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>

            </div>

          </div>

        ))
      }

    </div>

  );
}

export default Skills;