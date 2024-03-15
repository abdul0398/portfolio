"use client"
import Item from "../items/Item"
import { dataType } from "@/types/data"
export default function Container({data, className, name}:{data:dataType[], className?:string, name:string}){
    return (

        <div className="w-full h-full">
            <h3 className="text-2xl text-center font-bold mb-4">{name}</h3>
            <section className={className} >
                {data.map((item, index) => <Item key={index} name={item.name} logo={item.logo}/>)}
            </section>
        </div>
    )
}