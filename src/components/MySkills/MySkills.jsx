import './MySkills.css'
import HTMLImg from "../../../public/Images/html.png"
import CSSImg from "../../../public/Images/css.png"
import TailwindImg from "../../../public/Images/tailwind.png"
import DaisyImg from "../../../public/Images/daisyui.png"
import JSImg from "../../../public/Images/js.png"
import ReactImg from "../../../public/Images/react.png"
import NodeImg from "../../../public/Images/nodejs.png"
import ExpressImg from "../../../public/Images/express.png"
import MongoImg from "../../../public/Images/mongodb.png"
import FirebaseImg from "../../../public/Images/firebase.png"
import JWTImg from "../../../public/Images/jwt.png"
import gitImg from "../../../public/Images/github.png"
const MySkills = () => {
    return (
        <div id='skills' className='px-3'>
            <h4 className='text-center text-4xl font-bold'>My Skills</h4>
            <h1 className='text-center text-6xl font-bold my-4'>Technologies.</h1>
            <div id="tech" className=" py-8 max-w-screen-xl mx-auto border-4 flex flex-wrap gap-5 justify-center">
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src={HTMLImg} alt="" />
                    HTML
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src={CSSImg} alt="" />
                    CSS
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src={TailwindImg} alt="" />
                    TailwindCss
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src={DaisyImg} alt="" />
                    DaisyUI
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src={JSImg} alt="" />
                    JavaScript
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src={ReactImg} alt="" />
                    React.JS
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src={NodeImg} alt="" />
                    Node.Js
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src={ExpressImg} alt="" />
                    Express.Js
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src={MongoImg} alt="" />
                    MongoDb
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src={FirebaseImg} alt="" />
                    Firebase
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src={JWTImg} alt="" />
                    JWT
                </button>
                <button className="btn w-56 h-16 text-2xl font-bold bg-white border-2 hover:bg-slate-100 cursor-default ">
                    <img className="w-8" src={gitImg} alt="" />
                    GitHub
                </button>
            </div>
        </div>
    );
};

export default MySkills;