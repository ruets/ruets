// import "./Projects.scss";
// import constants from "../../../public/constants.json";
//
// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
//
// import ProjectTile from "../../components/ProjectTile/ProjectTile";
//
// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger);
//
// function Projects() {
//   const sectionRef = useRef(null);
//   const wrapperRef = useRef(null);
//
//   useGSAP(() => {
//     const section = sectionRef.current as HTMLDivElement;
//     const wrapper = wrapperRef.current as HTMLDivElement;
//
//     const scrollLength = wrapper.scrollWidth - window.innerWidth;
//
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: `+=${scrollLength}`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });
//
//     tl.to(wrapper, {
//       x: -scrollLength,
//       ease: "none",
//     });
//   }, []);
//
//   return (
//     <section id="projects" ref={sectionRef}>
//       <div className="projects-inner">
//         <h2 className="projects-title">Mes projets</h2>
//         <div className="project-wrapper" ref={wrapperRef}>
//           {constants.projects.list.map((project, index) => (
//             <ProjectTile project={project} key={index} />
//           ))}
//           <div className="scroll-filler" />
//         </div>
//       </div>
//     </section>
//   );
// }
//
// export default Projects;
