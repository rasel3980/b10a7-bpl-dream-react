import assets from '/assets/bg-shadow.png'
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${assets})` }} className="bg-cover bg-center h-screen bg-black w-11/12 mx-auto text-white mt-8 rounded-xl">
            <div className='flex justify-center items-center pt-14'>
            <img src="/assets/banner-main.png" alt="" />
            </div>
            <h1 className='text-4xl font-bold flex justify-center mt-7'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-2xl flex justify-center mt-7 text-gray-300'>Beyond Boundaries Beyond Limits</p>
            <div className='flex justify-center mt-7'>
            <button className='btn bg-yellow-300 '>Claim Free Credit</button>
            </div>
        </div>
    );
};
 
export default Banner;