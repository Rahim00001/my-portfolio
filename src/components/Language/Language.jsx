
const Language = () => {
    return (
        <div className="px-5"
            data-aos="fade-up"
            data-aos-duration="3000">
            <h1 className="text-center text-6xl font-bold my-10 ">Languages.</h1>
            <div className="max-w-screen-xl bg-slate-800 text-white rounded-xl py-5 mx-auto border grid grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col justify-center items-center">
                    <div className="radial-progress shadow shadow-slate-400" style={{ "--value": "98", "--size": "12rem", "--thickness": "6px" }} role="progressbar">98%</div>
                    <p className="text-lg font-bold mt-3">Bangla-Native</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="radial-progress shadow shadow-slate-400" style={{ "--value": "85", "--size": "12rem", "--thickness": "6px" }} role="progressbar">85%</div>
                    <p className="text-lg font-bold mt-3">English-Advanced</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="radial-progress shadow shadow-slate-400" style={{ "--value": "75", "--size": "12rem", "--thickness": "6px" }} role="progressbar">75%</div>
                    <p className="text-lg font-bold mt-3">Hindi-Fluent</p>
                </div>
            </div>
        </div>
    );
};

export default Language;