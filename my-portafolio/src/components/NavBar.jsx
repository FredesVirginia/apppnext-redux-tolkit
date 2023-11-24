import Image from 'next/image';
import Link from 'next/link';

export default function NavBar (){

    return (
        <nav className="h-[380px] pt-6 bg-zinc-900 text-white">
           <div className='flex items-center  w-[300px] justify-center '>
           <Image
                src="/Images/spark.png"
                width={50}
                height={50}
                alt="Picture of the author"
            />
                <h1 className='ml-4 font-bold transform -skew-x-6'> DEVELOPER WEB</h1>
            </div> 
               
        </nav>
    )
}