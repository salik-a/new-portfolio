import React from "react";
import { Stickman } from "./components/Stickman";
import { SpeechBubble } from "./components/SpeechBubble";
import { ComicButton } from "./components/ComicButton";
import {
  NAV_ITEMS,
  PROJECTS,
  EXPERIENCES,
  EDUCATION,
  SKILLS,
  BIO_TEXT,
  CONTACTS,
} from "./constants";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-ink font-body antialiased selection:bg-accent selection:text-ink min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-accent border-b-4 border-ink py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Stickman
                type="signaling"
                className="w-full h-full scale-125 translate-y-2"
              />
            </div>
            <h1 className="text-3xl font-comic tracking-wider">ALPER SALIK</h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-${item.font} text-lg hover:text-white transition-colors tracking-wide`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/assets/Alper-Salik-Resume.pdf"
              download
              className="inline-block"
            >
              <ComicButton
                variant="ink"
                size="sm"
                className="border-2 border-white shadow-[4px_4px_0px_0px_#30e8c9]"
              >
                GET CV
              </ComicButton>
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <section className="border-4 border-ink bg-white relative overflow-hidden irregular-border p-8 lg:p-16 halftone-bg flex flex-col lg:flex-row items-center gap-12 comic-shadow">
          <div className="flex-1 space-y-8 order-2 lg:order-1">
            <div className="inline-block px-4 py-1 bg-primary border-[3px] border-ink -rotate-2">
              <span className="font-marker text-xl">ORIGIN STORY</span>
            </div>

            <h2 className="text-6xl lg:text-8xl font-comic leading-none">
              HI, I’M{" "}
              <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-accent px-4 py-1 border-[3px] border-ink inline-block transform rotate-1">
                ALPER
              </span>
            </h2>

            <h3 className="text-3xl font-marker text-primary drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              REACT NATIVE DEVELOPER
            </h3>

            <p className="text-xl font-hand font-bold leading-relaxed">
              <span className="bg-accent px-2">
                I'm a passionate mobile developer
              </span>{" "}
              with a knack for clean code and intuitive user interfaces. I don't
              just write code; I create seamless experiences.
            </p>
            <p className="text-xl font-hand font-bold leading-relaxed">
              Currently deploying code at{" "}
              <strong className="underline decoration-primary decoration-4">
                Setcard
              </strong>
              .
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a
                href="/assets/Alper-Salik-Resume.pdf"
                download
                className="inline-block"
              >
                <ComicButton variant="accent" size="lg">
                  DOWNLOAD CV
                </ComicButton>
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com/salik-a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-14 h-14 bg-white border-4 border-ink flex items-center justify-center comic-shadow-sm hover:translate-y-1 hover:shadow-none transition-all"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/alper-salik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-14 h-14 bg-white border-4 border-ink flex items-center justify-center comic-shadow-sm hover:translate-y-1 hover:shadow-none transition-all"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a
                  href="mailto:salikalper@gmail.com"
                  aria-label="Email"
                  className="w-14 h-14 bg-white border-4 border-ink flex items-center justify-center comic-shadow-sm hover:translate-y-1 hover:shadow-none transition-all"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center order-1 lg:order-2 w-full">
            <SpeechBubble className="mb-12 transform -rotate-3 px-8">
              CONST DEVELOPER = <span className="text-primary">TRUE</span>;
            </SpeechBubble>
            <img
              src="/assets/hero/heroImage.png"
              alt="Hero"
              className="w-full max-w-[360px] h-auto drop-shadow-2xl"
            />
          </div>
        </section>

        {/* Bio and Chronicles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <section
            id="about"
            className="border-4 border-ink bg-white relative overflow-hidden irregular-border p-8 halftone-bg comic-shadow rotate-[0.5deg]"
          >
            <div className="absolute top-0 right-0 bg-ink text-white font-comic px-4 py-1 rotate-6 z-10">
              PAGE 02
            </div>
            <h2 className="text-5xl font-comic mb-8 underline decoration-accent decoration-8 underline-offset-8">
              THE BIO PANEL
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-6">
                <p className="text-2xl font-hand font-bold leading-relaxed max-w-xl">
                  {BIO_TEXT}
                </p>
              </div>
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <SpeechBubble className="mb-2 py-2 px-6 text-sm scale-90 -translate-y-4">
                  WHAT'S NEXT?
                </SpeechBubble>
                <Stickman
                  type="thinking"
                  className="w-full max-w-[180px] h-auto"
                />
              </div>
            </div>
          </section>

          {/* Chronicles Section */}
          <section
            id="history"
            className="border-4 border-ink bg-white relative overflow-hidden irregular-border p-8 halftone-bg comic-shadow -rotate-[0.5deg]"
          >
            <h2 className="text-5xl font-comic mb-10 underline decoration-primary decoration-8 underline-offset-8">
              CHRONICLES
            </h2>
            <div className="space-y-10 relative">
              <div className="absolute left-6 top-0 bottom-0 w-1.5 bg-ink"></div>
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-14 group">
                  <div
                    className="absolute left-4 top-1 w-6 h-6 border-4 border-ink rounded-full z-10"
                    style={{ backgroundColor: exp.color }}
                  ></div>
                  <div className="bg-white border-[3px] border-ink p-5 comic-shadow-sm group-hover:bg-gray-50 transition-colors">
                    <h3 className="font-comic text-3xl">{exp.company}</h3>
                    <p
                      className="font-marker text-sm mt-1"
                      style={{ color: exp.color }}
                    >
                      {exp.period}
                    </p>
                    {exp.achievements.map((achievement) => (
                      <p className="font-hand font-bold text-lg mt-3">
                        {achievement}
                      </p>
                    ))}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-ink text-white font-comic text-lg transform hover:scale-110 transition-transform"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Education Section */}
        <section
          id="academy"
          className="border-4 border-ink bg-white relative overflow-hidden irregular-border p-8 halftone-bg comic-shadow"
        >
          <h2 className="text-5xl font-comic mb-10 underline decoration-primary decoration-8 underline-offset-8">
            ACADEMY
          </h2>
          <div className="space-y-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="border-l-4 border-accent pl-6 py-4">
                <h3 className="font-comic text-2xl mb-1">{edu.degree}</h3>
                <p className="font-marker text-primary text-lg">
                  {edu.institution}
                </p>
                {(edu.year || edu.duration) && (
                  <p className="font-hand text-gray-600 mt-1">
                    {edu.year || edu.duration}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="border-4 border-ink bg-white relative overflow-hidden irregular-border p-8 halftone-bg comic-shadow"
        >
          <h2 className="text-5xl font-comic mb-10 underline decoration-accent decoration-8 underline-offset-8">
            POWER-UPS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["language", "framework", "tool"].map((category) => (
              <div key={category} className="space-y-4">
                <h3 className="font-comic text-2xl capitalize border-b-4 border-ink pb-2">
                  {category === "language"
                    ? "💻 Languages"
                    : category === "framework"
                      ? "⚡ Frameworks"
                      : "🔧 Tools"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.filter((s) => s.category === category).map(
                    (skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 bg-ink text-white font-comic text-sm hover:bg-accent hover:text-ink transition-all transform hover:scale-105"
                      >
                        {skill.name}
                      </span>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-7xl lg:text-8xl font-comic text-center mb-16 drop-shadow-lg transform -rotate-1">
            TOP MISSIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="border-4 border-ink bg-white overflow-hidden comic-shadow group hover:-translate-y-2 transition-transform"
              >
                <div
                  className="border-b-4 border-ink h-72 flex items-center justify-center relative halftone-bg overflow-hidden"
                  style={{ backgroundColor: `${project.color}33` }}
                >
                  <div className="absolute top-4 left-4 bg-ink text-white font-comic text-xl px-4 py-1 transform -rotate-3 z-10">
                    {project.missionNumber}
                  </div>

                  <svg
                    className="w-56 h-56 transition-transform group-hover:scale-110"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    <rect
                      x="70"
                      y="30"
                      width="60"
                      height="120"
                      rx="8"
                      stroke="black"
                      strokeWidth="4"
                      fill="white"
                    />
                    <rect
                      x="85"
                      y="60"
                      width="30"
                      height="30"
                      stroke="black"
                      strokeWidth="4"
                    />
                    <path d="M85 60h10v10h-10z" fill="black" />
                    <path d="M105 80h10v10h-10z" fill="black" />
                    <path d="M85 80h10v10h-10z" fill={project.color} />
                    <circle
                      cx="100"
                      cy="140"
                      r="4"
                      stroke="black"
                      strokeWidth="4"
                    />
                  </svg>
                </div>

                <div className="p-8 space-y-6">
                  <h3 className="text-4xl lg:text-5xl font-comic">
                    {project.title}
                  </h3>
                  <p className="font-hand font-bold text-xl leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3 border-t-4 border-ink pt-4">
                    <div>
                      <p className="font-comic text-m text-gray-600 uppercase">
                        Features
                      </p>
                      <p className="font-hand text-m">{project.features}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-comic text-m text-gray-600 uppercase">
                      Tech Stack
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tag) => (
                      <span
                        key={tag}
                        className="border-[2px] border-ink px-2 py-1 font-comic text-sm hover:bg-accent transition-colors rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-comic text-lg  transition-colors"
                    >
                      <ComicButton variant="accent" size="sm">
                        App Store
                      </ComicButton>
                    </a>
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 font-comic text-lg  transition-colors"
                    >
                      <ComicButton variant="accent" size="sm">
                        Google Play
                      </ComicButton>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="border-4 border-ink bg-white relative overflow-hidden irregular-border p-12 halftone-bg text-center space-y-12 comic-shadow"
        >
          <div className="flex flex-col items-center">
            <SpeechBubble className="mb-8 transform rotate-2 px-12 text-2xl">
              HEY THERE! LET'S CONNECT!
            </SpeechBubble>
            <Stickman
              type="signaling"
              className="w-full max-w-[200px] h-auto"
            />
          </div>

          <h2 className="text-6xl lg:text-8xl font-comic transform -rotate-1 tracking-wider">
            THE SIGNAL IS UP!
          </h2>

          <p className="text-2xl lg:text-3xl font-hand font-bold max-w-2xl mx-auto leading-relaxed">
            I'm currently scouting for new adventures. If you have a project
            that needs a mobile hero, reach out!
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row justify-center gap-10 pb-4">
              <ComicButton
                variant="primary"
                size="xl"
                onClick={() =>
                  (window.location.href = "mailto:hello@alpersalik.com")
                }
              >
                EMAIL ME
              </ComicButton>
            </div>

            <div className="flex justify-center gap-8">
              <a
                href="https://linkedin.com/in/alpersalik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white border-4 border-ink flex items-center justify-center comic-shadow hover:translate-y-1 hover:shadow-none transition-all hover:bg-primary"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/alpersalik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-primary border-4 border-ink flex items-center justify-center comic-shadow hover:translate-y-1 hover:shadow-none transition-all hover:bg-accent"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 pb-12">
          <div className="inline-block bg-ink text-white font-marker text-xl px-10 py-3 transform -rotate-1 tracking-wider hover:rotate-0 transition-transform cursor-default">
            © {new Date().getFullYear()} ALPER SALIK // CREATED IN THE CODE-LAB
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
