import Footer from "../components/footer";
import PersonImg from "../../../public/img/person.jpeg";

export default function About() {
  return (
    <div
      className="flex flex-col min-h-screen lg:pl-[80px]"
      style={{ backgroundColor: "#1A1A18" }}
    >
      <Footer />

      <main className="flex flex-col lg:flex-row w-full flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-0 lg:items-stretch">

        <section className="w-full lg:w-1/2 mt-0 mb-6 lg:mb-0 lg:mt-10 lg:mt-0 order-1 lg:order-2">
          <div
            className="
              relative flex justify-center items-center 
              min-h-[300px] sm:min-h-[400px] md:min-h-[500px]
              lg:sticky lg:top-0 lg:min-h-screen
            "
          >
            <div
              className="
                w-full max-w-[600px]
                h-[350px] sm:h-[450px] md:h-[550px] lg:h-[750px]
                bg-center bg-cover bg-no-repeat
                rounded-md shadow-lg
              "
              style={{
                backgroundImage: `url(${PersonImg.src})`,
              }}
            />

          </div>
        </section>

        <section
          aria-labelledby="about-title"
          className="w-full lg:w-1/2 lg:min-h-screen lg:pr-8 order-2 lg:order-1"
        >
          <header>
            <h1
              id="about-title"
              className="
                font-grandslang 
                text-4xl sm:text-5xl 
                mb-5
                md:text-6xl 
                lg:text-[180px] 
                leading-none 
                lg:mb-5 
                lg:mt-8
              "
            >
              About
            </h1>
          </header>

          <article className="space-y-6 pb-10">

            <section aria-labelledby="intro-title">
              <h2 id="intro-title" className="sr-only">Introduction</h2>

              <p
                className="
                  font-grandslang 
                  text-2xl sm:text-3xl md:text-4xl 
                  lg:text-4xl 
                  w-full sm:w-[90%] lg:w-[80%]
                "
              >
                I'm John. A full-stack developer, problem solver and digital product builder.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-6">
                Over the last years, I’ve worked across multiple layers of software development —
                from frontend engineering and backend architecture to UI/UX design, SEO/CRO
                strategy and data automation.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-6">
                As a Senior Full-Stack Developer, I design and build scalable applications, ensuring
                performance, reliability and clarity in every stage of the product lifecycle.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-6">
                I have a strong foundation in UI/UX principles, accessibility and prototyping,
                shaping interfaces that improve user experience while maintaining engineering
                excellence.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-6">
                What drives me is solving real problems through clear engineering, thoughtful
                design and continuous iteration.
              </p>
            </section>

            <section aria-labelledby="quote-title">
              <h2 id="quote-title" className="sr-only">Favorite Quote</h2>

              <blockquote>
                <p
                  className="
                    font-grandslang 
                    text-3xl sm:text-4xl md:text-5xl 
                    mb-4 leading-tight
                  "
                >
                  “There is nothing so useless as doing efficiently that which should not be done at all.”
                </p>
              </blockquote>

              <p className="text-sm sm:text-base leading-6">
                This quote resonates with my approach to building purposeful, meaningful software.
              </p>
            </section>

            <section aria-labelledby="experience-title">
              <h2 id="experience-title" className="font-grandslang text-xl sm:text-2xl">
                EXPERIENCE
              </h2>

              <ul className="list-disc list-inside space-y-1 mt-4 text-sm sm:text-base leading-6">
                <li>Senior Full-Stack Developer — G4F</li>
                <li>Full-Stack Developer — Decisão Sistemas</li>
                <li>SEO/CRO Developer — Media.Monks Brasil</li>
                <li>Data & Automation Analyst — Ministério da Infraestrutura</li>
              </ul>
            </section>

            <section aria-labelledby="skills-title">
              <h2 id="skills-title" className="font-grandslang text-xl sm:text-2xl">
                SKILLS
              </h2>
              
              <p className="mt-4 text-sm sm:text-base leading-6">
                Full-Stack Development • UI/UX • SEO/CRO • Agile • APIs • Architecture • Automation •
                Databases • DevOps • Cloud • Debugging • Performance Optimization
              </p>
            </section>

            <section aria-labelledby="kudos-title">
              <h2 id="kudos-title" className="font-grandslang text-xl sm:text-2xl">
                KUDOS
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-6">
                My journey has been shaped by great mentors and teams who helped refine my skills and
                thinking as an engineer and designer.
              </p>

              <p className="mt-4"><strong>THANK YOU.</strong></p>
            </section>

          </article>
        </section>
      </main>
    </div>
  );
}
