import { useState } from "react";

function Creator() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [niche, setNiche] = useState('');
  const [about, setAbout] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [portfolio, setPortfolio] = useState('');

  const [educations, setEducations] = useState([{ school: '', degree: '' }]);
  const [workExperiences, setWorkExperiences] = useState([{ position: '', company: '', startDate: '', endDate: '' }]);
  const [skills, setSkills] = useState(['']);

  const addEducation = () => {
    setEducations([...educations, { school: '', degree: '' }]);
  };

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, { position: '', company: '', startDate: '', endDate: '' }]);
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducations = educations.map((education, i) =>
      i === index ? { ...education, [field]: value } : education
    );
    setEducations(updatedEducations);
  };

  const handleWorkChange = (index, field, value) => {
    const updatedWork = workExperiences.map((work, i) =>
      i === index ? { ...work, [field]: value } : work
    );
    setWorkExperiences(updatedWork);
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = skills.map((skill, i) => (i === index ? value : skill));
    setSkills(updatedSkills);
  };

  return (
    <>
      <div className="form">
        <form>
          <section className="personalDataForm">
            <h2>Personal Data</h2>
            <label>
              <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label>
            <label>
              <input type="text" name="niche" placeholder="Niche" value={niche} onChange={(e) => setNiche(e.target.value)} />
            </label>
            <label>
              <textarea name="about" rows="6" cols="45" placeholder="About you" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
            </label>
          </section>

          <section className="educationForm">
            <h2>Education</h2>
            {educations.map((education, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="School"
                  value={education.school}
                  onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={education.degree}
                  onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                />
              </div>
            ))}
            <button type="button" onClick={addEducation}>Add Education</button>
          </section>

          <section className="workForm">
            <h2>Work Experience</h2>
            {workExperiences.map((work, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Position"
                  value={work.position}
                  onChange={(e) => handleWorkChange(index, 'position', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={work.company}
                  onChange={(e) => handleWorkChange(index, 'company', e.target.value)}
                />
                <input
                  type="date"
                  value={work.startDate}
                  onChange={(e) => handleWorkChange(index, 'startDate', e.target.value)}
                />
                <input
                  type="date"
                  value={work.endDate}
                  onChange={(e) => handleWorkChange(index, 'endDate', e.target.value)}
                />
              </div>
            ))}
            <button type="button" onClick={addWorkExperience}>Add Work Experience</button>
          </section>

          <section className="skillsForm">
            <h2>Skills</h2>
            {skills.map((skill, index) => (
              <input
                key={index}
                type="text"
                placeholder="Skill"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
              />
            ))}
            <button type="button" onClick={addSkill}>Add Skill</button>
          </section>

          <section className="contactForm">
            <h2>Contacts</h2>
            <label>
              <input type="email" name="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              <input type="tel" name="tel" placeholder="Phone number" minLength="9" maxLength="9" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label>
              <input type="text" name="portfolio" placeholder="Portfolio link" value={portfolio} onChange={(e) => setPortfolio(e.target.value)} />
            </label>
          </section>
        </form>
      </div>

      <div className="cv">
        <section className="personalData">
          <h1>{firstName} {lastName}</h1>
          <h4>{niche}</h4>
          <h3>About Me:</h3>
          <h4>{about}</h4>
        </section>

        <section className="education">
          <h3>Education</h3>
          {educations.map((education, index) => (
            <div key={index}>
              <p>{education.school}</p>
              <p>{education.degree}</p>
            </div>
          ))}
        </section>

        <section className="work">
          <h3>Work Experience</h3>
          {workExperiences.map((work, index) => (
            <div key={index}>
              <p>{work.position}</p>
              <p>{work.company}</p>
              <p>Start Date: {work.startDate}</p>
              <p>End Date: {work.endDate}</p>
            </div>
          ))}
        </section>

        <section className="skills">
          <h3>Skills</h3>
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </section>

        <section className="contact">
          <h3>Contact Me</h3>
          <p>E-mail: {email}</p>
          <p>Phone Number: {phone}</p>
          <p>Portfolio Link: {portfolio}</p>
        </section>
      </div>
    </>
  );
}

export default Creator;
