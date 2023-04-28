const scrollToSection = (section) => {
    const scrollSection = document.getElementById(section);
    scrollSection.scrollIntoView({ behavior: 'smooth' });
  };

  export default scrollToSection;