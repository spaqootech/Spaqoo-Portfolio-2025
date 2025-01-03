import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Whatsapp Clone",
    description:
      "Expo React Native Whatsapp Clone",
    image: "/whatsapp.png",
    github: "https://github.com/spaqootech/Whatsapp-clone-01",
    link: "https://github.com/spaqootech",
  },{
    name: "SASS Website",
    description:
      "Landing Page for SASS Website using Webflow , Tailwindcss , Reactjs and html css ",
    image: "/sass.png",
    github: "https://github.com/spaqootech",
    link: "https://github.com/spaqootech",
  },{
    name: "Sticker Smash App",
    description:
      "Expo react native Sticker Smash App",
    image: "/stickersmash.png",
    github: "https://github.com/spaqootech",
    link: "https://github.com/spaqootech",
  },{
    name: "Chat App",
    description:
      "Expo React Native Chat App",
    image: "/chatapp.png",
    github: "https://github.com/spaqootech",
    link: "https://github.com/spaqootech",
  },{
    name: "Job Connect Website",
    description:
      "Job Connect Website using Nextjs and Tailwindcss",
    image: "/jobconnect.png",
    github: "https://github.com/spaqootech",
    link: "https://github.com/spaqootech",
  },{
    name: "3D Website",
    description:
      "3D Website using Threejs , Reactjs, React fiber , Threejs and drel",
    image: "/3dapp.png",
    github: "https://github.com/spaqootech/threejs-setup",
    link: "https://github.com/spaqootech",
  },{
    name: "Music App",
    description:
      "Music App using Expo React Native and Tailwindcss",
    image: "/musicapp.png",
    github: "https://github.com/spaqootech/Music-Player",
    link: "https://github.com/spaqootech",
  },{
    name: "Social Media App",
    description:
      "Social Media App using Expo React Native and Tailwindcss",
    image: "/socialmedia.png",
    github: "https://github.com/spaqootech",
    link: "https://github.com/spaqootech",
  },{
    name: "YT Clone App",
    description:
      "YT Clone App using Expo React Native and Tailwindcss",
    image: "/ytclone.png",
    github: "https://github.com/spaqootech",
    link: "https://github.com/spaqootech",
  },{
    name: "Uber Clone App",
    description:
      "Uber Clone App using Expo React Native and Tailwindcss",
    image: "/rydeapp.png",
    github: "https://github.com/spaqootech",
    link: "https://github.com/spaqootech",
  },{
    name: "Recipe App",
    description:
      "Recipe App using Expo React Native and Tailwindcss",
    image: "/recipeapp.png",
    github: "https://github.com/spaqootech/Recipe-App",
    link: "https://github.com/spaqootech",
  },{
    name: "App Store Clone",
    description:
      "App Store Clone using Expo React Native and Tailwindcss",
    image: "/appstore.png",
    github: "https://github.com/spaqootech",
    link: "https://github.com/spaqootech",
  },
  {
    name: "Metaverse Website",
    description: "Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real",
    image: "/metaverse.png",
    github: "https://github.com/spaqootech/metavers-spaqoo",
    link: "https://metaverse-spaqoo.vercel.app/",
  },
  {
    name: "Nike Website",
    description:
      "Nike website clone using next js and tailwindcss",
    image: "/nike.png",
    github: "https://github.com/spaqootech/nike-clone-spaqoo",
    link: "https://nike-clone-spaqoo.vercel.app/",
  },
  {
    name: "Sushi Resturent Website",
    description:
      "Feel the taste of the most popular Japanese food from anywhere and anytime.",
    image: "/sushi.png",
    github: "https://github.com/spaqootech/restaurants-spaqoo",
    link: "https://restaurants-spaqoo.vercel.app/",
  },
  {
    name: "Travel Website",
    description: "We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app",
    image: "/travel.png",
    github: "https://github.com/spaqootech/Travel-Website.git",
    link: "https://travel-website-712x07o9p-makeyourselfpro.vercel.app/",
  }
  ,
  {
    name: "Thankful Thoughts",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "PlatoIO",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/platoio.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
  {
    name: "Kator Family Photos",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
