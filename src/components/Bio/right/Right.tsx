import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from '@/components/ui/image-hover'

export default function Right() {
    return (
        <div className="w-1/3 text-white flex">
            <CardContainer className="inter-var h-fit">
                <CardBody>
                    <CardItem translateZ="100">
                        <Image
                             src="/dp.png"
                             height="1000"
                             width="1000"
                             className="h-96 w-full object-cover group-hover/card:shadow-xl mix-blend-multiply"                            
                             alt="thumbnail"
                        />
                    </CardItem>
                </CardBody>
            </CardContainer>
        
        </div>
    )
}