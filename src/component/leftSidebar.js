"use client";
import React, { useState } from "react";
import { SlSocialSpotify } from "react-icons/sl";
import { RiHome5Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgStack } from "react-icons/cg";
import Image from "next/image";
import { useRouter } from "next/navigation";


const LeftSidebar = () => {

    const router = useRouter();

    const artistName = [
        {
            id: 1,
            name: "Sukhbir",
            img: "/img1.jpg"
        },
        {
            id: 2,
            name: "Shaan",
            img: "/img2.jpg"
        },
        {
            id: 3,
            name: "Jonita Gandhi",
            img: "/img3.jpg"
        },
        {
            id: 4,
            name: "Rochak Kohli",
            img: "/img4.jpg"
        },
        {
            id: 5,
            name: "Mika Singh",
            img: "/img5.jpg"
        },
        {
            id: 6,
            name: "Samita",
            img: "/img6.jpg"
        },
        {
            id: 7,
            name: "B Park",
            img: "/img7.jpg"
        },
        {
            id: 8,
            name: "Mika Singh",
            img: "/img8.jpg"
        },
        {
            id: 9,
            name: "Samita",
            img: "/img9.jpg"
        },
        {
            id: 10,
            name: "B Park",
            img: "/img10.jpg"
        },
        {
            id: 11,
            name: "Mika Singh",
            img: "/img11.jpg"
        },
        {
            id: 12,
            name: "Samita",
            img: "/img12.jpg"
        },
        {
            id: 13,
            name: "B Park",
            img: "/img13.jpg"
        },
        {
            id: 14,
            name: "B Park",
            img: "/img14.jpg"
        },
        {
            id: 15,
            name: "Mika Singh",
            img: "/img15.jpg"
        },
        {
            id: 16,
            name: "Samita",
            img: "/img16.jpg"
        },
    ]

    return (
        <div className="bg-[#121212]  h-[638px] mb-2 rounded-lg overflow-hidden">
            <div className="h-full overflow-y-auto no-scrollbar">

                <div className="fixed rounded-lg z-10 p-2 w-[298px] rounded-l-lg bg-[#121212] ">
                    <div className=" flex gap-2 mt-2 text-white">
                        <MdOutlineLibraryBooks className="text-white h-6 w-6" />
                        <p className="text-sm font-extrabold">Your Library</p>
                        <div className="text-white justify-end ml-auto">
                            <IoIosAdd className="h-6 w-6" />
                        </div>
                    </div>

                    <div className=" mt-3 grid grid-cols-4 gap-2 text-center">
                        <h6 className="px-2 border text-sm text-white bg-black py-1 border-gray-700 rounded-2xl">
                            Artists
                        </h6>
                    </div>
                </div>

                <div className="mt-22 p-2 flex text-white ">
                    <div className="flex gap-2 h-6 w-6 ">
                        <FaSearch className="text-white " />
                    </div>
                    <div className="flex items-center justify-end ml-auto gap-2 text-sm mr-4">
                        <p>Recents</p>
                        <GiHamburgerMenu className="cursor-pointer" />
                    </div>
                </div>

                <div className="mt-2 p-2">
                    {
                        artistName.map((artist, index) => (

                            <div
                                key={index}
                                onClick={() => router.push(`/artist/${artist.name}`)}
                                className="flex items-center gap-4 text-white mt-2 hover:bg-gray-700 p-2 cursor-pointer"
                            >
                                <div className=" relative w-14 h-14 rounded-full overflow-hidden">
                                    <Image
                                        src={artist.img}
                                        alt={"artist.name"}
                                        fill
                                        className=""
                                    />
                                </div>
                                <div>
                                    <h5 className="text-md">{artist.name}</h5>
                                    <p className="text-[10px]">Artist</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default LeftSidebar; 