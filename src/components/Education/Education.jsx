import { FaBookOpen, FaLandmark, FaLaptopCode, FaUserGraduate } from "react-icons/fa";
const Education = () => {
    return (
        <div className="max-w-screen-lg mx-auto px-5 my-20">
            <h1 className="text-center text-6xl font-bold mb-9">Education</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <FaUserGraduate className="bg-black text-white text-xl px-1 rounded-full" />
                    </div>
                    <div className="timeline-start md:text-end mb-10"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <time className="font-mono italic">2021 - Present</time>
                        <div className="text-lg font-black uppercase">BACHELOR OF SCIENCE in Statistics</div>
                        The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <FaLandmark className="bg-black text-white text-xl px-1 rounded-full" />
                    </div>
                    <div className="timeline-end mb-10"
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <time className="font-mono italic">2019 - 2021</time>
                        <div className="text-lg font-black uppercase">Higher Secondary Certificate (HSC)</div>
                        iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apples consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <FaBookOpen className="bg-black text-white text-xl px-1 rounded-full" />
                    </div>
                    <div className="timeline-start md:text-end mb-10"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <time className="font-mono italic">2017 - 2021</time>
                        <div className="text-lg font-black uppercase">Secondary School Certificate (SSC)</div>
                        The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <FaLaptopCode className="bg-black text-white text-xl px-1 rounded-full" />
                    </div>
                    <div className="timeline-end mb-10"
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <time className="font-mono italic">JUL 2023 - Present</time>
                        <div className="text-lg font-black uppercase">WEb Development Course</div>
                        iPhone is a line of smartphones produced by Apple Inc. that use Apples own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    );
};

export default Education;