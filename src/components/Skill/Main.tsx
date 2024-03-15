import SpotLight from "../ui/spot-light"
import Container from "./container/Container"
import { frontEnd, backEnd, others } from "./items/data"

export default function Skill() {
    return (
        <div className="mt-8 pt-5 font-sans text-2xl min-h-[800px] w-full lg:w-3/4 mx-auto">
            <SpotLight heading="SKILLS" />
            <div className="flex h-[300px] mt-11">
                <Container className="flex flex-wrap justify-center w-3/4 h-3/4 mx-auto" data={frontEnd} name="Frontend" />
                <Container className="flex flex-wrap justify-center w-3/4 h-3/4 mx-auto" data={backEnd} name="Backend"/>
            </div>
            <div className="mx-auto text-center w-1/2 h-[300px]">
                <Container className="flex flex-wrap justify-center w-3/4 h-1/2 mx-auto" data={others} name="Others" />
            </div>
        </div>
    )
}