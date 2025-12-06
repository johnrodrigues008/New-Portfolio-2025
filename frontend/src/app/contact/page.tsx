import Link from "next/link";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#ECE7C1] text-[#1A1A18]">
      <Footer />
      
      <main className="flex flex-col lg:flex-row w-full flex-1 lg:justify-center lg:items-center lg:gap-12 xl:gap-20 px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <div className="w-full lg:w-[80%]">
          <h2 className="font-grandslang text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 hidden">CONTACT</h2>
          <h3 className="mt-6 text-[128px] font-grandslang lg:text-[150px]">Hello.</h3>
          <p className="mt-6">Need a beautiful, well-structured website that you can own and maintain yourself? Get in touch.</p>
          <p className="mt-6">
              Email: johnrodrigues008@gmail.com
            </p>
            <p>On the Internet:{" "}
              <span className="inline-block border-current group underline hover:no-underline">
                <Link target="_blank" href="https://www.linkedin.com/in/johnrodrigues009/">LinkedIn</Link>
              </span> /{" "}
              <span className="inline-block border-current group underline hover:no-underline">
                <Link target="_blank" href="https://dribbble.com/Rodrigues008">Dribbble</Link>
              </span> /{" "}
              <span className="inline-block border-current group underline hover:no-underline">
                <Link target="_blank" href="https://dribbble.com/Rodrigues008">Threads</Link>
              </span> /{" "}
              <span className="inline-block border-current group underline hover:no-underline">
                <Link target="_blank" href="https://github.com/johnrodrigues008">Github</Link>
              </span>
            </p>
        </div>
      </main>
    </div>
  );
}


{/* 
  
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
</span> 


*/}

