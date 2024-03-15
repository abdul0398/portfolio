import Image from "next/image";

export default function Item({name,logo}: {name:string,logo:string}){
    return (
        <div className="w-[170px] h-[70px] me-2 flex justify-center items-center shadow-[inset_0_0_0_2px_#616467] rounded-full">
            <Image
                src={logo}
                alt="HTML"
                width={30}
                height={30}
            />
            <p className="ms-1">{name}</p>
        </div>
    )
}