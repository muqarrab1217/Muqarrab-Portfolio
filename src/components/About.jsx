/**
 * @copyright 2024 muqarrabahmed
 * @license Apache-2.0
 */


const aboutItems = [
  {
    label: 'Project Completed',
    number: 10
  },
  {
    label: 'Years of experience',
    number: 2
  }
];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

      <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up hover:scale-110 hover:shadow-[0_0_50px_var(--main-color),_0_0_100px_var(--main-color)] transition duration-300" style={{ '--main-color': '#3b82f6' }}>
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
          Welcome ! I'm Muqarrab Ahmed, a passionate and skilled developer currently pursuing my studies in Computer Science at FAST Nuces Islamabad. With a strong foundation in Full Stack Database Development and C++ Development, I have honed my technical abilities and problem-solving skills through various projects and coursework.          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About