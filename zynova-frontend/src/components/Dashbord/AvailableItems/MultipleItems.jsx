
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme CSS

function MultipleItems() {
    // Slider settings
    const settings = {
        dots: true, // Enable dots for navigation
        infinite: true, // Enable infinite loop
        speed: 500, // Speed of slide transition
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 3, // Number of slides to scroll at a time

    };

    return (
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div key={index} className="bg-white h-[450px] text-black rounded-xl">
                            <div className="h-56 rounded-t-xl border-r-indigo-500 flex justify-center items-center">
                                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4 p-4">
                                <p className="text-xl font-semibold">{d.name}</p>
                                <p>{d.review} </p>
                                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read more</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
}

const data = [
    {
        name: 'apple',
        img: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
        review: 'dsfsdfsdfsdfsdsdsdsd'
    },
    {
        name: 'apple',
        img: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
        review: 'dsfsdfsdfsdfsdsdsdsd'
    },
    {
        name: 'apple',
        img: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
        review: 'dsfsdfsdfsdfsdsdsdsd'
    },
    {
        name: 'apple',
        img: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
        review: 'dsfsdfsdfsdfsdsdsdsd'
    },
    {
        name: 'apple',
        img: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
        review: 'dsfsdfsdfsdfsdsdsdsd'
    },
    {
        name: 'apple',
        img: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
        review: 'dsfsdfsdfsdfsdsdsdsd'
    }
]


export default MultipleItems;

