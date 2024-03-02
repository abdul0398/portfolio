import Description from "./Description";
import { Heading } from "./Heading";
import { word } from "@/types/acernity";

const words :word[] = [
    {
        text:"Problem",
        className:"text-white"
    },
    {
        text:"Solver",
        className:"text-white"
    },
    {
        text:"And a",
        className:"text-white"
    },
    {
        text:"Full Stack",
        className:"text-blue-500"
    },
    {
        text:"Developer",
        className:"text-blue-500"
    }
]




export default function Left() {
    return (
        <div className="text-white w-full lg:w-1/2 md:w-1/2 min-h-96 px-14 pt-14">
            <Heading heading="SOFTWARE ENGINEER"/>
            <Description words={words}/>
        </div>
    );
}