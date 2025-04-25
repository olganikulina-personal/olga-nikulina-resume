// File: src/App.tsx
import ContactForm from "./components/ContactForm";
import { Helmet } from "react-helmet";

function App() {
  const skills = [
    "React (Hooks, Context API)",
    "TypeScript",
    "JavaScript (ES6+)",
    "NestJS",
    "Node.js",
    "REST API development",
    "PostgreSQL",
    "MongoDB",
    "Google Cloud",
    "Go",
    "Java",
    "Git",
    "Agile",
    "Scrum",
    "Docker",
  ];

  const skillColors = [
    "#a9e1f7",
    "#3dc1e9",
    "#df185d",
    "#ac051d",
    "#fe596c",
    "#fed3dd",
    "#fec0cc",
    "#132fb6",
    "#0a178d",
    "#fe7f3e",
    "#fed673",
    "#b9bfd3",
    "#449dca",
    "#f9ecee",
    "#096e59",
    "#31a37f",
    "#42b883",
    "#3dc0ad",
    "#063926",
    "#c4e663",
    "#9bcd8d",
  ];

  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: "#f9ecee" }}>
      <Helmet>
        <title>Olga Nikulina - Full-Stack Developer</title>
        <meta
          name="description"
          content="Olga Nikulina's personal portfolio and resume. Full-Stack Developer with expertise in React, Node.js, and more."
        />
        <meta
          name="keywords"
          content="Olga Nikulina, full-stack developer, React, Node.js, software engineer, resume"
        />
        <meta
          property="og:title"
          content="Olga Nikulina - Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Olga Nikulina's personal portfolio and resume. Full-Stack Developer with expertise in React, Node.js, and more."
        />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Olga Nikulina - Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Olga Nikulina's personal portfolio and resume. Full-Stack Developer with expertise in React, Node.js, and more."
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
            alt="Olga Nikulina"
            className="w-32 h-32 rounded-lg object-cover shadow-md border-4 border-[#3dc1e9]"
          />
          <div>
            <h1 className="text-3xl font-bold text-[#132fb6]">Olga Nikulina</h1>
            <p className="text-[#096e59]">
              Team Lead & Senior Product Software Developer ·{" "}
              <span className="text-[#31a37f]">Los Angeles, CA</span>
            </p>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#0a178d]">About Me</h2>
          <p className="text-[#063926]">
            Hello and welcome, I'm Olga. I learned software development over
            several years, while working as a QA, by reading the code and
            tracking down where bugs occurred. I've moved from QA, to software
            development, to leading a team of developers. I pride myself on
            being organized, detail-oriented, and thoroughly researched. Before
            jumping into a project I like to ask tons of questions to better
            understand scope, estimates, and potential gaps. As lead, I split my
            time between administrative tasks while also prioritizing keeping my
            hands on the keyboard, to ensure I remain knowledgeable of the code
            so as to best support my team.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#0a178d]">Work</h2>
          <ul className="list-disc list-inside text-[#063926]">
            <li>
              <strong>NuORDER by Lightspeed</strong> – Team Lead, Senior
              Developer (Oct 2022–Present)
            </li>
            <li>
              <strong>NuORDER</strong> – Software Engineer (Dec 2017–Oct 2022)
            </li>
            <li>
              <strong>NuORDER</strong> – Lead Automation QA (Mar 2015–Dec 2017)
            </li>
            <li>
              <strong>Eccentex</strong> – QA Engineer (Sep 2012–Mar 2015)
            </li>
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
            <li>
              <strong>Georgia Institute of Technology</strong> – Master of
              Science in Computer Science (Fall 2025 – )
            </li>
            <li>
              <strong>Santa Monica College</strong> – Associate of Science in
              Computer Programming, Graduated with Honors (Aug 2010 – Jun 2012)
            </li>
            <li>
              <strong>University of California, Los Angeles</strong> – Bachelor
              of Arts in History (Sep 2006 – Jun 2010)
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#0a178d]">
            Outside of Work
          </h2>
          <p className="text-[#063926]">
            Outside of work, I enjoy cooking, gardening, reading history
            nonfiction books, and spending time with my family.
          </p>
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
