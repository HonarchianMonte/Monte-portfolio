const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: [
        "Lead development of scalable web applications serving 100K+ users",
        "Mentor junior developers and conduct code reviews",
        "Architected microservices infrastructure reducing deployment time by 40%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Co.",
      period: "2020 - 2022",
      description: [
        "Developed and maintained multiple client-facing applications",
        "Implemented CI/CD pipelines improving deployment efficiency",
        "Collaborated with cross-functional teams to deliver projects on time"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartUp Labs",
      period: "2019 - 2020",
      description: [
        "Built responsive web applications using React and Node.js",
        "Participated in agile development processes",
        "Contributed to open-source projects and internal tools"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-600 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-600 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
