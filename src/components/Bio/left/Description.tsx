import { TypewriterEffectSmooth } from "@/components/ui/type-writer"
import { word } from "@/types/acernity"

export default function Description(
    {words}
    :
    {words:word[]}
    ){
    return (
        <TypewriterEffectSmooth words={words}/>
    )
}