
const Header = () => {
    return (
        <div className="flex justify-between items-center w-11/12 mt-12 mx-auto">
            <div>
            <img src="/assets/logo.png" alt="" />
            </div>
            <div className="flex gap-12 justify-center items-center text-gray-500 font-bold">
            <a href="">Home</a>
            <a href="">Fixture</a>
            <a href="">Teams</a>
            <a href="">Schedules</a>
            <div className="">
                <button className="border border-solid rounded-xl px-5 flex items-center gap-2">Coin <img className='w-8' src="/assets/download.png" alt="" /></button>
            </div>
            </div>
        </div>
    );
};

export default Header;