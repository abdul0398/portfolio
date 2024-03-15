import { TextGenerateEffect } from "@/components/ui/text-generate";
import Description from "./Description";
import { Heading } from "./Heading";
import { word } from "@/types/acernity";

const words: word[] = [
    {
        text: "Problem",
        className: "text-white"
    },
    {
        text: "Solver",
        className: "text-white"
    },
    {
        text: "And a",
        className: "text-white"
    },
    {
        text: "Full Stack",
        className: "text-gray-500"
    },
    {
        text: "Developer",
        className: "text-gray-500"
    }
]
const para = ` I'm always ready to take on new tasks. I love learning and working hard to do my best.
 With a positive attitude and a desire to keep improving,
 I'm ready to make a big impact and achieve great things.`

export default function Left() {
    return (
        <div className="w-full lg:w-2/3 min-h-96 px-14 pt-14">
            <Heading heading="SOFTWARE ENGINEER" />
            <Description words={words} />
            <TextGenerateEffect words={para}/>
            <button className="ms-28 mt-8 shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                Resume
            </button>
        </div>
    );
}