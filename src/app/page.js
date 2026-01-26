"use client"
import react, { useState } from "react";
import { SlSocialSpotify } from "react-icons/sl";
import { RiHome5Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

export default function Home() {

  const [ active, setActive ] = useState("All");

  const artistName = [
    {
      id: 1,
      name: "Sukhbir",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 2,
      name: "Shaan",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 3,
      name: "Jonita Gandhi",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 4,
      name: "Rochak Kohli",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 5,
      name: "Mika Singh",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 6,
      name: "Samita",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 7,
      name: "B Park",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 8,
      name: "Mika Singh",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 9,
      name: "Samita",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 10,
      name: "B Park",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 11,
      name: "Mika Singh",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 12,
      name: "Samita",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 13,
      name: "B Park",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 14,
      name: "B Park",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 15,
      name: "Mika Singh",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 16,
      name: "Samita",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 17,
      name: "B Park",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
  ]

  const artist = [
    {
      id: 1,
      name: "Sunil",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg",
    },
    {
      id: 2,
      name: "Shaan",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 3,
      name: "Jonita Gandhi",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
    {
      id: 4,
      name: "Rochak Kohli",
      img: "/ca7cc81a-2967-417a-bd59-c082def846f0.jpeg"
    },
  ]
  return (
    <>

      <div className="bg-black min-h-screen fixed z-10 inset-0">
        <div className=" ml-6 mr-6 text-center flex h-20  items-center">
          <div >
            <SlSocialSpotify className=" h-12 w-12 text-black bg-white rounded-full" />
          </div>
          <div className="flex items-center justify-end ml-auto mr gap-4">
            <div className=" gap-2 flex items-center">
              <div className="bg-[#121212] h-12 w-12 p-2 cursor-pointer rounded-full">
                <RiHome5Line className="text-[#a3a3a3] h-8 w-8 " />
              </div>
              <div className=" w-[400px] flex bg-[#121212] h-12 items-center px-4 gap-2 rounded-3xl border-1 border-white ">
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

        <div className="ml-6 mr-6 grid grid-cols-[300px_1fr_300px] gap-2">
          <div className="bg-[#121212]  h-[698px] mb-2 rounded-lg overflow-hidden">
            <div className="h-full overflow-y-auto scrollbar-track-white">

              <div className="fixed z-10 p-2 w-[290px] rounded-l-lg bg-[#121212] ">
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
                    <div className="flex items-center gap-4 text-white mt-2 hover:bg-gray-700 p-2 cursor-pointer">
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

          <div className="bg-[#121212] mb-2 rounded-lg overflow-hidden">
            <div className="flex gap-2 mt-4 ml-10 text-white fixed z-10">
              <button onClick={() => setActive("All")} className={` text-black ${active === "All" ? "bg-white" : "bg-transparent text-white"}  py-1 px-4 rounded-3xl cursor-pointer`}>All</button>
              <button onClick={() => setActive("Music")} className={` text-black ${active === "Music"? "bg-white" : "bg-transparent text-white"}  py-1 px-4 rounded-3xl cursor-pointer`}>Music</button>
              <button onClick={() => setActive("Podcast")} className={` text-black ${active === "Podcast" ? "bg-white" : "bg-transparent text-white"}  py-1 px-4 rounded-3xl cursor-pointer`}>prodcast</button>
            </div>
            <div className=" mt-18 ml-10 mr-8 text-white grid grid-cols-4 gap-2">
              {
                artist.map((artist, index) => (
                  <div key={index} className=" flex cursor-pointer items-center gap-4 bg-gray-600 rounded-lg ">
                    <div className="h-10 w-10 relative overfolow-hidden">
                      <Image
                        src={artist.img}
                        alt="name"
                        fill
                        className="object cover rounded-l-lg"
                      />
                    </div>
                    <p className="text-sm">{artist.name}</p>
                  </div>
                ))
              }

            </div>
          </div>
          <div className="bg-[#121212] mb-2 rounded-lg overflow-hidden">

          </div>

        </div>
      </div>


    </>
  );
}
