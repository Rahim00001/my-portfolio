
const Projects = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-20 px-5">
            <h1 className="text-center text-6xl font-bold my-8">Recent Projects</h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="card  card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full h-60" src="../../../public/ProjectImg/StydySync.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold">StudySync</h2>
                        <p className="text-gray-700 mb-2 font-medium">Study-Sync is an employee management website based on online education platform. The Salary, work hours, contracts, etc. of an employee can be managed using this website.</p>
                        <div className="card-actions">
                            <a href="https://study-sync-a12.web.app"><button className="btn btn-outline btn-sm shadow-2xl shadow-black ">Live Preview</button></a>
                            <a href="https://github.com/Rahim00001/StudySync"><button className="btn btn-outline btn-sm shadow-2xl shadow-black ">Code Link (Client) </button></a>
                            <a href="https://github.com/Rahim00001/study-sync-server"><button className="btn btn-outline btn-sm shadow-2xl shadow-black ">Code Link (Server)</button></a>
                        </div>
                    </div>
                </div>
                <div className="card  card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full h-60" src="../../../public/ProjectImg/StayZen.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold">StayZen</h2>
                        <p className="text-gray-700 mb-2 font-medium">StayZen Is a Hotel Booking Web Application. Discover and book accommodations effortlessly, with a user-friendly interface and a vast selection of hotel rooms.</p>
                        <div className="card-actions">
                            <a href="https://stayzen-a10.web.app"><button className="btn btn-outline btn-sm shadow-2xl shadow-black ">Live Preview</button></a>
                            <a href="https://github.com/Rahim00001/StayZen"><button className="btn btn-outline btn-sm shadow-2xl shadow-black ">Code Link (Client) </button></a>
                            <a href="https://github.com/Rahim00001/stay-zen-server"><button className="btn btn-outline btn-sm shadow-2xl shadow-black">Code Link (Server)</button></a>
                        </div>
                    </div>
                </div>
                <div className="card  card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full h-60" src="../../../public/ProjectImg/Screenshot (269).png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold">DriveNest</h2>
                        <p className="text-gray-700 mb-2 font-medium">DriveNest is an automotive Website. Where user can add, update, and buy cars. Firebase authentication to verify user</p>
                        <div className="card-actions">
                            <a href="https://drivenest-a10.web.app"><button className="btn btn-outline btn-sm shadow-2xl shadow-black ">Live Preview</button></a>
                            <a href="https://github.com/Rahim00001/DriveNest"><button className="btn btn-outline btn-sm shadow-2xl shadow-black ">Code Link (Client) </button></a>
                            <a href="https://github.com/Rahim00001/drive-nest-server"><button className="btn btn-outline btn-sm shadow-2xl shadow-black ">Code Link (Server)</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;