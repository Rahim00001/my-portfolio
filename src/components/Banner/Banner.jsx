import TypewriterComponent from "typewriter-effect";
import Lottie from "lottie-react";
import banner from "../../../public/banner.json"
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../../public/Resume.pdf"
const Banner = () => {
    return (
        <div className="h-[80vh] flex mt-56 md:mt-32 lg:mt-0 flex-col-reverse lg:flex-row justify-center items-center">
            <div className="lg:w-1/2 flex justify-center">
                <div className="ml-5 md:ml-10 lg:ml-20">
                    <p className="uppercase text-3xl font-semibold">Hello, I'm</p>
                    <h1 className="text-6xl font-bold mb-2">Kamrul Islam Rahim</h1>
                    <div className="text-4xl">
                        <TypewriterComponent
                            options={{
                                strings: ['React Developer', 'Javascript Developer', 'Web Developer', 'Programmer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p className="text-lg font-semibold my-4 max-w-lg">
                        I design, code, and build superficial website, and I love what I do. I have rich experience in Front-end Development, also I am good at Back-End. I love to talk with you about our unique.
                    </p>
                    <div className="flex gap-2">
                        <a href="https://www.linkedin.com/in/kamrul-islam-rahim-7084382a4/">
                            <button className="btn btn-circle text-4xl">
                                <FaLinkedin />
                            </button>
                        </a>
                        <a href="https://github.com/Rahim00001">
                            <button className="btn btn-circle text-4xl">
                                <FaGithub />
                            </button>
                        </a>
                        <a href="" download={resume}>
                            <button className="btn">
                                Download Resume
                                <FaFileDownload className="text-xl"></FaFileDownload>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
                <Lottie className="max-w-md" animationData={banner}></Lottie>
            </div>
        </div>
    );
};

export default Banner;
