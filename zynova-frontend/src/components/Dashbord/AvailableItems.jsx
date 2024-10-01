import { HiOutlineSearch } from 'react-icons/hi';
import CarouselCardSliderSwiper from './AvailableItems/CarouselCardSliderSwiper';

export default function AvailableItems() {
    return (
        <div className="bg-white  px-14 flex flex-col items-center border-b border-gray-200 justify-between gap-10">
            <div className="bg-primary rounded-lg p-2 flex-1 border border-gray-200 flex items-center w-full">
                <span className="text-2xl text-white">Available Items</span>
                <div className="flex justify-end gap-2 ml-auto">
                    <div className="relative w-72">
                        {/* -- Search icon -- */}
                        <HiOutlineSearch fontSize={20} className="text-gray-800 absolute top-1/2 left-3 -translate-y-1/2" />

                        {/* -- Input field -- */}
                        <input
                            type="text"
                            placeholder="Search..."
                            className="text-sm focus:outline-none border border-gray-300 w-full h-full pl-11 pr-4 rounded-sm"
                        />
                    </div>
                </div>
            </div>

            <div className='flex overflow-x-scroll'>
                <CarouselCardSliderSwiper />
            </div>
        </div>
    );
}