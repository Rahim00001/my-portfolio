import Lottie from "lottie-react";
import about from "../../../public/about.json"
const AboutMe = () => {
    return (
        <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto my-10 px-5 items-center">
            <div className="lg:w-1/2 flex justify-center">
                <Lottie className="max-w-md" animationData={about}></Lottie>
            </div>
            <div className="lg:w-1/2">
                <h1 className="text-5xl font-bold mb-5">About Me</h1>
                <p>I am an enthusiastic web developer, I wield expertise in HTML, CSS, and the power of Tailwind CSS for seamless styling. My proficiency extends to the dynamic duo of JavaScript and React, coupled with efficient navigation using React Router. I have mastered the art of real-time user authentication with Firebase and back-end prowess with Node.js and Express.js. Embracing the MongoDB magic, I bring full-stack capabilities to every project. Let's create web experiences that resonate and inspire! </p>
            </div>
        </div>
    );
};

export default AboutMe;