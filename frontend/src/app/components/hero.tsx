import Link from "next/link";

export default function Hero(){
  return(
 <div className="hero lg:h-screen lg:flex lg:items-end mb-8 lg:mb-0 lg:pb-[100px]">
  <div className="w-full max-w-[500px] lg:w-[500px] lg:h-auto">
    
    <h1 className="mb-3 sm:mb-4 lg:mb-7 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[20px] tracking-[2px]">
      JOHN RODRIGUES
    </h1>

    <p className="mb-3 lg:mb-7 text-sm sm:text-base lg:text-[15px] leading-6 tracking-[2px]">
      Senior Full-Stack Developer · Front-End & Back-End Engineering · Product & Interface Design
    </p>

    <p className="text-sm sm:text-base lg:text-[15px] leading-6 tracking-[2px]">
      Acting as a Senior Developer at{/* {" "}
      <span className="inline-block border-current group underline hover:no-underline">
        <Link
          href="https://www.linkedin.com/in/johnrodrigues009/"
          className="
            transition-all duration-200
            group-hover:line-through
            group-hover:decoration-2
            group-hover:decoration-current
          "
        >
          Detail Technologies
        </Link>
      </span>{" "} */}
      , delivering complete solutions across the entire product lifecycle including UX/UI design, prototyping, front-end architecture, API development, and system integration.
    </p>

  </div>
</div>

  );
}




