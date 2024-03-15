export default function SpotLight({ heading }: { heading: string }) {
    return (
        <div>
            <div className="w-1/4 h-2 rounded-lg bg-white shadow-slate-50 shadow-2xl border border-1 mx-auto"></div>
            <div className="w-0 h-0 mt-2
                border-l-[50px] border-l-transparent
                border-b-[75px] border-b-white-500
                border-r-[50px] border-r-transparent mx-auto blur-2xl"></div>
            <h1 className="text-center text-4xl font-extrabold bg-gradient-to-b from-white via-gray-300 to-black text-transparent bg-clip-text">{heading}</h1>
        </div>
    )
}