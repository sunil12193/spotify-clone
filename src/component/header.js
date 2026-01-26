import react from "react"
import { SlSocialSpotify } from "react-icons/sl";
import { RiHome5Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import { MdOutlineLibraryBooks } from "react-icons/md";
const Header = () => {

    return (
        <>
            <div className="bg-black min-h-screen fixed z-10 inset-0">
                <div className=" ml-6 mr-6 text-center flex h-20  items-center">
                    <div >
                        <SlSocialSpotify className=" h-12 w-12 text-black bg-white rounded-full" />
                    </div>
                    <div className="flex items-center justify-end ml-auto mr gap-4">
                        <div className=" gap-2 flex items-center">
                            <div className="bg-gray-800 h-12 w-12 p-2 cursor-pointer rounded-full">
                                <RiHome5Line className="text-[#a3a3a3] h-8 w-8 " />
                            </div>
                            <div className=" w-[400px] flex bg-gray-800 h-12 items-center px-4 gap-2 rounded-3xl border-1 border-white ">
                                <div>
                                    <FaSearch className="text-[#a3a3a3] " />
                                </div>
                                <input
                                    type="text"
                                    className="p-2 w-full text-[#a3a3a3] border-none outline-none focus:ring-0"
                                    placeholder="What do you want to play ?"
                                />
                            </div>
                        </div>

                        <div className="gap-2 flex items-center">

                            <h6 className="bg-white px-6 py-2 cursor-pointer inline-block whitespace-nowrap rounded-full font-extrabold">
                                Explore Premium
                            </h6>

                            <div className="hover:text-white text-[#a3a3a3] font-extrabold cursor-pointer whitespace-nowrap flex items-center gap-2 ">
                                <GrInstallOption /> Install App
                            </div>
                        </div>

                        <div className="gap-2 flex items-center">
                            <div className="hover:text-white text-[#a3a3a3] font-extrabold cursor-pointer whitespace-nowrap flex items-center gap-2 ">
                                <FaBell className="text-[#a3a3a3]" />
                            </div>
                            <div className="hover:text-white text-[#a3a3a3] font-extrabold cursor-pointer whitespace-nowrap flex items-center gap-2 ">
                                <TbUsersGroup className="text-[#a3a3a3] h-12 w-6" />
                            </div>

                            <div className="bg-[#5ff10a] px-4 border-2 border-white cursor-pointer py-1 text-2xl rounded-full">
                                s
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            
        </>
    )
}

export default Header