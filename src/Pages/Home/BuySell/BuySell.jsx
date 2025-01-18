import { FaLongArrowAltRight } from 'react-icons/fa';

const BuySell = () => {
    return (
        <div className='mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className="relative group">
                <img
                    className='w-full h-auto rounded-xl transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                    src="https://i.ibb.co.com/GQvcnMv/buy.jpg"
                    alt="img"
                />
                <div className="absolute -bottom-9 left-12 rounded-lg flex justify-center items-center gap-5 bg-base-200 ml-5 mr-5 p-4">
                    <h1 className='text-gray-800 font-bold text-2xl'>Buy Apartment</h1>
                    <p className='w-10 h-10 rounded-full bg-red-500 relative group-hover:bg-white group-hover:text-red-500 transition-colors duration-300 ease-in-out'>
                        <FaLongArrowAltRight className='text-white group-hover:text-red-500 absolute top-2 left-2 text-xl' />
                    </p>
                </div>
            </div>
            <div className="relative group">
                <img
                    className='w-full h-auto rounded-xl transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                    src="https://i.ibb.co.com/GRDLS3z/property-img-2.jpg"
                    alt="img"
                />
                <div className="absolute -bottom-9 left-12 rounded-lg flex justify-center items-center gap-5 bg-base-200 ml-5 mr-5 p-4">
                    <h1 className='text-gray-800 font-bold text-2xl'>Sell Apartment</h1>
                    <p className='w-10 h-10 rounded-full bg-sky-500 relative group-hover:bg-white group-hover:text-sky-500 transition-colors duration-300 ease-in-out'>
                        <FaLongArrowAltRight className='text-white group-hover:text-sky-500 absolute top-2 left-2 text-xl' />
                    </p>
                </div>
            </div>
            <div className="relative group">
                <img
                    className='w-full h-auto rounded-xl transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                    src="https://i.ibb.co.com/k0WfrNq/property-img-3.jpg"
                    alt="img"
                />
                <div className="absolute -bottom-9 left-12 rounded-lg flex justify-center items-center gap-5 bg-base-200 ml-5 mr-5 p-4">
                    <h1 className='text-gray-800 font-bold text-2xl'>Rent Apartment</h1>
                    <p className='w-10 h-10 rounded-full bg-yellow-500 relative group-hover:bg-white group-hover:text-yellow-500 transition-colors duration-300 ease-in-out'>
                        <FaLongArrowAltRight className='text-white group-hover:text-yellow-500 absolute top-2 left-2 text-xl' />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BuySell;
