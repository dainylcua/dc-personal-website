import LayoutContainer from "../../LayoutContainer"
import Header2 from "../../Header2"
import ExperienceCard from "./ExperienceCard"
import { useEffect } from "react"

export default function Experience() {
  useEffect(() => {
    const d = document.querySelector('#experience') as HTMLElement
    console.log(d.offsetTop)
  }, [])
  return(
    <LayoutContainer color="bg-stone-800" id="experience">
      <div className="flex w-full justify-center">
        <Header2>Work Experience</Header2>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          <ExperienceCard />
          <ExperienceCard reverse/>
          <ExperienceCard />
        </div>
      </div>
    </LayoutContainer>
  )
}