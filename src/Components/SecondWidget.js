import React, { useState } from 'react'
import left from '../assets/arrow-left-solid.svg'
import right from '../assets/arrow-right-solid.svg'

function SecondWidget() {
    const [images, setImages] = useState([])
    const handleImageAdd = (e)=>{
        const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file))
        setImages(images.concat(newImages))
    }
    return (
        <>
            <div className=' w-full bg-[#363C43] rounded-xl lg:p-4 p-2 lg:my-3 my-1 xl:text-lg text-base shadow-xl shadow-black transition-all duration-300 '>
                <div className='flex justify-between  xl:mx-5 lg:mx-3 mx-1 transition-all duration-300 '>
                    <div className=" border-2 border-transparent lg:px-8 px-4 py-2 rounded-2xl bg-black text-white transition-all duration-300 "> Gallery</div>
                    <div className='flex lg:gap-3 gap-1.5 transition-all duration-300 '>
                        <div className='pt-2'>
                            <label htmlFor='imageAdd' className=' border-2 border-transparent lg:px-5 px-3 lg:py-3 py-2 rounded-3xl  shadow-gray-500 shadow-lg text-white transition-all duration-300 '>+ ADD IMAGE</label>
                            <input id='imageAdd' name='imageAdd' onChange={handleImageAdd} multiple accept="image/*" type='file' className="hidden"></input>
                        </div>
                        <button className="transition-all duration-300   px-3 lg:py-2  shadow-md shadow-gray-500 rounded-full bg-black text-white">
                            <img src={left} alt='left arrow' />
                        </button>
                        <button className="transition-all duration-300   px-3 lg:py-2  shadow-md shadow-gray-500 rounded-full bg-black text-white">
                            <img src={right} alt='right arrow' />
                        </button>
                    </div>
                </div>
                <div className='flex gap-3 xl:mx-5 lg:mx-3 mx-1 mt-4 h-52 transition-all duration-300 '>
                    {images&&images.map((image, index) => {
                        return (
                            <div key={index} className='flex justify-center items-center  '>
                                <img src={image} alt='image' className='transition-all duration-300 bg-gray-400 rounded-xl lg:h-52 h-48 lg:min-w-52 min-w-36' />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='h-1 w-3/4 mx-auto my-1 rounded-xl bg-[#323638]'></div>
        </>

    )
}

export default SecondWidget