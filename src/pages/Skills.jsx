import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiSupabase,
  SiFirebase,
} from "react-icons/si"

function About() {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  
  return (
    <>
      <div className="overflow-hidden	rounded-3xl mb-2 text-center 	 flex flex-col justify-center items-center  p-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 h-screen text-white ">
      <h1 data-aos="fade-right" className="text-2xl text-purple-200 w-fit font-bold mb-5 mt-7 border-b-4 border-purple-400">
          Skills</h1>

        <div data-aos="slide-right" className="w-full rounded-2xl border-purple-600 bg-indigo-900 grid grid-cols-6 max-md:grid-cols-2 gap-y-7	 place-items-center shadow-2xl p-4">
        <div className="flex flex-col items-center">
            <SiNextdotjs size={44}/>
            <h2 className=" font-bold">NextJS</h2>
          </div>

         

          
          <div className="flex flex-col items-center">
            <SiReact size={44}/>
            <h2 className="font-bold">React</h2>
          </div>

          <div className="flex flex-col items-center">
            <SiTypescript size={42}/>
            <h2 className="font-bold"> TypeScript</h2>
            
          </div>

          <div className="flex flex-col items-center">
            <SiTailwindcss size={44}/>
            <h2 className="font-bold"> Tailwind</h2>
            
          </div>

          <div className="flex flex-col items-center">
            <SiHtml5 size={44}/>
            <h2 className="font-bold"> HTML</h2>
          </div>

          <div className="flex flex-col items-center">
            <SiCss3 size={44}/>
            <h2 className="font-bold">CSS</h2>
          </div>

          <div className="flex flex-col items-center">
            <SiJavascript size={44}/>
            <h2 className="font-bold"> Javascript</h2>
          </div>

          <div className="flex flex-col items-center">
            
             <SiSupabase size={44}/>
            <h2 className="font-bold">Supabase</h2>
          </div>

          <div className="flex flex-col items-center">
            <SiFirebase size={44}/>
            <h2 className="font-bold">Firebase</h2>
          </div>

          
        </div>
        
      </div>
    </>
  );
}

export default About;
