const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm Monte
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Software Engineer | Full Stack Developer
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-blue-50">
          Building innovative solutions and crafting exceptional digital experiences
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
