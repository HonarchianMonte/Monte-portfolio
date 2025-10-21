const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a passionate Software Engineer with a strong background in full-stack development. 
              I specialize in building scalable web applications and enjoy solving complex technical challenges.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With expertise in modern technologies and frameworks, I strive to create elegant, 
              user-friendly solutions that make a real impact. I'm always eager to learn new 
              technologies and stay up-to-date with industry best practices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, I enjoy contributing to open-source projects, reading tech blogs, 
              and exploring new tools that can enhance my development workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
