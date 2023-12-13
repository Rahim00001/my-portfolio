import { FaMapLocation } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const FindMe = () => {
    return (
        <div className="flex lg:flex-col gap-5 w-full justify-center items-center border">
            <div className="card w-72 bg-base-content text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="text-4xl"><FaMapLocation /></h2>
                    <p className="card-title">Address</p>
                    <p className="font-bold">Dhaka-1361, Bangladesh</p>
                </div>
            </div>
            <div className="card w-72 bg-base-content text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="text-4xl"><LuPhoneCall /></h2>
                    <p className="card-title">Lets Talk</p>
                    <p className="font-bold">+880 1767260638</p>
                    <p className="font-bold">+880 1979798785</p>
                </div>
            </div>
            <div className="card w-72 bg-base-content text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="text-4xl"><MdOutlineMarkEmailUnread /></h2>
                    <p className="card-title">Send Email</p>
                    <p className="font-bold">rahimlpt2022@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default FindMe;