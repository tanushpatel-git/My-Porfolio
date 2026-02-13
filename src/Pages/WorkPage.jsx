import Navbar from '../Components/CommonCompo/Navbar'
import { useEffect } from 'react';

export default function WorkPage() {



    useEffect(() => {
        window.document.title = "Work - Tanush Patel";
    }, [])


    return (
        <div className="min-h-screen absolute w-full bg-white">
            <Navbar
                colorInNavabar="black"
            />
            <div className='h-screen flex justify-center z-10 mt-50'>
                <div className='relative h-full bg-black w-[85vw]'>
                    {/*code pending..!!!*/}
                </div>
            </div>
        </div>
    );
}