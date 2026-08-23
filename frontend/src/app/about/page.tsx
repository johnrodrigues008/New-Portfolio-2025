"use client";

import Footer from "../components/footer";
import PersonImg from "../../../public/img/person.jpeg";
import { useTranslations } from "../i18n";

export default function About() {
  const t = useTranslations();

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
                aspect-[3/4] sm:aspect-[4/5]
                lg:aspect-auto lg:w-[min(600px,100%)] lg:h-[calc(100vh-2rem)]
                bg-center bg-cover bg-no-repeat
                rounded-md shadow-lg
              "
              style={{ backgroundImage: `url(${PersonImg.src})` }}
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
              {t.about.title}
            </h1>
          </header>

          <article className="space-y-6 pb-10">

            <section aria-labelledby="intro-title">
              <h2 id="intro-title" className="sr-only">{t.about.introTitle}</h2>

              <p
                className="
                  font-grandslang 
                  text-2xl sm:text-3xl md:text-4xl 
                  lg:text-4xl 
                  w-full sm:w-[90%] lg:w-[80%]
                "
              >
                {t.about.introLead}
              </p>

              <p className="mt-4 text-sm sm:text-base leading-6">
                {t.about.intro1}
              </p>

              <p className="mt-4 text-sm sm:text-base leading-6">
                {t.about.intro2}
              </p>

              <p className="mt-4 text-sm sm:text-base leading-6">
                {t.about.intro3}
              </p>

              <p className="mt-4 text-sm sm:text-base leading-6">
                {t.about.intro4}
              </p>
            </section>

            <section aria-labelledby="quote-title">
              <h2 id="quote-title" className="sr-only">{t.about.quoteTitle}</h2>

              <blockquote>
                <p
                  className="
                    font-grandslang 
                    text-3xl sm:text-4xl md:text-5xl 
                    mb-4 leading-tight
                  "
                >
                  {t.about.quote}
                </p>
              </blockquote>

              <p className="text-sm sm:text-base leading-6">
                {t.about.quoteNote}
              </p>
            </section>

            <section aria-labelledby="experience-title">
              <h2 id="experience-title" className="font-grandslang text-xl sm:text-2xl">
                {t.about.experience}
              </h2>

              <ul className="list-disc list-inside space-y-1 mt-4 text-sm sm:text-base leading-6">
                {t.about.experienceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="skills-title">
              <h2 id="skills-title" className="font-grandslang text-xl sm:text-2xl">
                {t.about.skills}
              </h2>
              
              <p className="mt-4 text-sm sm:text-base leading-6">
                {t.about.skillsList}
              </p>
            </section>

            <section aria-labelledby="kudos-title">
              <h2 id="kudos-title" className="font-grandslang text-xl sm:text-2xl">
                {t.about.kudos}
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-6">
                {t.about.kudosText}
              </p>

              <p className="mt-4"><strong>{t.about.thankYou}</strong></p>
            </section>

          </article>
        </section>
      </main>
    </div>
  );
}
