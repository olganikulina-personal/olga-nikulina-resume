// File: src/App.tsx
import ContactForm from "./components/ContactForm";
import { Helmet } from "react-helmet";
import resumeData from "./data/resume.json";

function App() {
  const {
    personalInfo,
    skills,
    skillColors,
    experience,
    education,
    outsideWork,
  } = resumeData;

  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: "#f9ecee" }}>
      <Helmet>
        <title>{personalInfo.name} - Full-Stack Developer</title>
        <meta
          name="description"
          content={`${personalInfo.name}'s personal portfolio and resume. Full-Stack Developer with expertise in React, Node.js, and more.`}
        />
        <meta
          name="keywords"
          content={`${personalInfo.name}, full-stack developer, React, Node.js, software engineer, resume`}
        />
        <meta
          property="og:title"
          content={`${personalInfo.name} - Full-Stack Developer`}
        />
        <meta
          property="og:description"
          content={`${personalInfo.name}'s personal portfolio and resume. Full-Stack Developer with expertise in React, Node.js, and more.`}
        />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:url" content="https://www.olganikulina.dev/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${personalInfo.name} - Full-Stack Developer`}
        />
        <meta
          name="twitter:description"
          content={`${personalInfo.name}'s personal portfolio and resume. Full-Stack Developer with expertise in React, Node.js, and more.`}
        />
        <meta name="twitter:image" content="/profile.jpg" />
      </Helmet>
      <div
        className="max-w-3xl mx-auto rounded-xl p-8 shadow-xl"
        style={{ backgroundColor: "#fff", border: "1px solid #df185d" }}
      >
        <div className="flex items-center mb-6 space-x-4">
          <img
            src="/profile.jpg"
            alt={personalInfo.name}
            className="w-32 h-32 rounded-lg object-cover shadow-md border-4 border-[#3dc1e9]"
          />
          <div>
            <h1 className="text-3xl font-bold text-[#132fb6]">
              {personalInfo.name}
            </h1>
            <p className="text-[#096e59]">
              {personalInfo.title} ·{" "}
              <span className="text-[#31a37f]">{personalInfo.location}</span>
            </p>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#0a178d]">About Me</h2>
          <p className="text-[#063926]">{personalInfo.about}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#0a178d]">Work</h2>
          <ul className="list-disc list-inside text-[#063926]">
            {experience.map((job, index) => (
              <li key={index}>
                <strong>{job.company}</strong> – {job.role} ({job.period})
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#0a178d]">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-white text-sm font-medium shadow"
                style={{
                  backgroundColor: skillColors[index % skillColors.length],
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#0a178d]">Education</h2>
          <ul className="list-disc list-inside text-[#063926]">
            {education.map((edu, index) => (
              <li key={index}>
                <strong>{edu.school}</strong> – {edu.degree}
                {edu.details && `, ${edu.details}`} ({edu.period})
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#0a178d]">
            Outside of Work
          </h2>
          <p className="text-[#063926]">{outsideWork}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#df185d]">Resume</h2>
          <a
            href="/Olga_Nikulina_Resume.pdf"
            download
            className="inline-block bg-[#fe7f3e] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#ac051d] transition-colors"
          >
            Download PDF
          </a>
        </section>

        <ContactForm />
      </div>
    </div>
  );
}

export default App;
