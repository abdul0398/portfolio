import Image from 'next/image'

export default function Right(){
    return (
        <div className="w-1/2 text-white flex justify-center">
            <div className="w-3/4 h-3/4 border-white border my-auto">
                <Image
                src="/dp.jpg"
                alt='profile picture'
                width={300}
                height={300}
                className='rounded-full'
                />
            </div>
        </div>
    )
}