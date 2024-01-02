import './MySkills.css'
const MySkills = () => {
    return (
        <div id='skills' className='px-3'>
            <h4 className='text-center text-4xl font-bold'>My Skills</h4>
            <h1 className='text-center text-6xl font-bold my-4'>Technologies.</h1>
            <div id="tech" className=" py-8 max-w-screen-xl mx-auto border-4 flex flex-wrap gap-5 justify-center">
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src="../../../public/Images/html.png" alt="" />
                    HTML
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src="../../../public/Images/css.png" alt="" />
                    CSS
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src="../../../public/Images/tailwindIcon.png" alt="" />
                    TailwindCss
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src="../../../public/Images/daisyui.png" alt="" />
                    DaisyUI
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src="../../../public/Images/js.png" alt="" />
                    JavaScript
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src="../../../public/Images/react.png" alt="" />
                    React.JS
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src="../../../public/Images/nodejs.png" alt="" />
                    Node.Js
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src="../../../public/Images/express.png" alt="" />
                    Express.Js
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src="../../../public/Images/mongodb.png" alt="" />
                    MongoDb
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src="../../../public/Images/firebase.png" alt="" />
                    Firebase
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src="../../../public/Images/jwt.png" alt="" />
                    JWT
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src="../../../public/Images/github.png" alt="" />
                    GitHub
                </button>
            </div>
        </div>
    );
};

export default MySkills;