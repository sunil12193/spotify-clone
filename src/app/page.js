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
import { CgStack } from "react-icons/cg";
import Image from "next/image";

export default function Home() {

  const [active, setActive] = useState("All");

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

  const artist = [
    {
      id: 1,
      name: "Sunil",
      img: "/img3.jpg",
    },
    {
      id: 2,
      name: "Shaan",
      img: "/img4.jpg"
    },
    {
      id: 3,
      name: "Jonita Gandhi",
      img: "/img11.jpg"
    },
    {
      id: 4,
      name: "Rochak Kohli",
      img: "/img12.jpg"
    },
  ]

  const albumData = [
    { id: 1, name: "Sukhbir", img: "/img1.jpg", description: "Punjabi pop legend" },
    { id: 2, name: "Shaan", img: "/img2.jpg", description: "Romantic playback singer" },
    { id: 3, name: "Jonita Gandhi", img: "/img3.jpg", description: "Modern playback voice" },
    { id: 4, name: "Rochak Kohli", img: "/img4.jpg", description: "Soulful music composer" },
    { id: 5, name: "Mika Singh", img: "/img5.jpg", description: "Energetic party icon" },
    { id: 6, name: "Samita", img: "/img6.jpg", description: "Indie melodic artist" },
    { id: 7, name: "B Park", img: "/img7.jpg", description: "Urban rap producer" },
    { id: 8, name: "Mika Singh", img: "/img8.jpg", description: "High energy performer" },
    { id: 9, name: "Samita", img: "/img9.jpg", description: "Experimental indie vocals" },
    { id: 10, name: "B Park", img: "/img10.jpg", description: "Modern hip hop" },
    { id: 11, name: "Mika Singh", img: "/img11.jpg", description: "Bollywood pop powerhouse" },
    { id: 12, name: "Samita", img: "/img12.jpg", description: "Soft soulful tunes" },
    { id: 13, name: "B Park", img: "/img13.jpg", description: "Fresh urban sound" },
    { id: 14, name: "B Park", img: "/img14.jpg", description: "Experimental music creator" },
    { id: 15, name: "Mika Singh", img: "/img15.jpg", description: "Chart topping hits" },
    { id: 16, name: "Samita", img: "/img16.jpg", description: "Emotional vocal storyteller" }
  ];

  const podcastData = [
    { id: 1, name: "Samita", img: "/img6.jpg", description: "Indie melodic artist" },
    { id: 2, name: "B Park", img: "/img7.jpg", description: "Urban rap producer" },
    { id: 3, name: "Mika Singh", img: "/img8.jpg", description: "High energy performer" },
    { id: 4, name: "Samita", img: "/img9.jpg", description: "Experimental indie vocals" },
    { id: 5, name: "B Park", img: "/img10.jpg", description: "Modern hip hop" },
    { id: 6, name: "Mika Singh", img: "/img11.jpg", description: "Bollywood pop powerhouse" },
  ];
  const musicData = [
    { id: 1, name: "Samita", img: "/img6.jpg", description: "Indie melodic artist" },
    { id: 2, name: "B Park", img: "/img7.jpg", description: "Urban rap producer" },
    { id: 3, name: "Mika Singh", img: "/img8.jpg", description: "High energy performer" },
    { id: 4, name: "Samita", img: "/img9.jpg", description: "Experimental indie vocals" },
    { id: 5, name: "B Park", img: "/img10.jpg", description: "Modern hip hop" },
    { id: 6, name: "Mika Singh", img: "/img11.jpg", description: "Bollywood pop powerhouse" },
    { id: 7, name: "Samita", img: "/img12.jpg", description: "Soft soulful tunes" },
    { id: 8, name: "B Park", img: "/img13.jpg", description: "Fresh urban sound" },
    { id: 9, name: "B Park", img: "/img14.jpg", description: "Experimental music creator" },
    { id: 10, name: "Mika Singh", img: "/img15.jpg", description: "Chart topping hits" },
    { id: 11, name: "Samita", img: "/img16.jpg", description: "Emotional vocal storyteller" }
  ];

  const renderCards = (album) => {
    return album.map((album, index) => (
      <div key={index} className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer text-white">
        <div className="h-40 relative overflow-hidden">
          <Image
            src={album.img}
            alt={album.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="py-1">{album.name}</p>
        <span>{album.description}</span>
      </div>
    ));
  }


  const renderContent = () => {
    switch (active) {
      case "All":
        return renderCards(albumData);
      case "Music":
        return renderCards(musicData);
      case "Podcast":
        return renderCards(podcastData);
      default:
        return null;
    }
  };



  return (
    <>

      <div className="bg-black min-h-screen fixed z-10 inset-0">
        <div className=" ml-6 mr-6 text-center flex h-20  items-center">
          <div >
            <SlSocialSpotify className=" h-12 w-12 text-black bg-white rounded-full" />
          </div>

          <div className="flex items-center justify-end ml-auto  mr gap-4">
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
                <div className="h-10 w-10 border-l-2 group border-white cursor-pointer flex justify-center items-center px-2">
                  <CgStack className="text-[#a3a3a3] h-6 w-6" />
                  {/* <span className="hidden overflow-visible fixed z-10 group-hover:block mt-20 bg-white p-1 text-[12px] rounded-xl ">Browser</span> */}
                </div>
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
                <FaBell className="text-[#a3a3a3] hover:text-white " />
              </div>
              <div className="hover:text-white text-[#a3a3a3] font-extrabold cursor-pointer whitespace-nowrap flex items-center gap-2 ">
                <TbUsersGroup className="text-[#a3a3a3] h-12 w-6 hover:text-white " />
              </div>

              <div className="bg-[#5ff10a] px-4 border-2 border-white cursor-pointer py-1 text-2xl rounded-full">
                s
              </div>
            </div>

          </div>

        </div>

        <div className="ml-6 mr-6 grid grid-cols-[300px_1fr_300px] gap-2">
          {/* first div */}
          <div className="bg-[#121212]  h-[698px] mb-2 rounded-lg overflow-hidden">
            <div className="h-full overflow-y-auto no-scrollbar">

              <div className="fixed z-10 p-2 w-[298px] rounded-l-lg bg-[#121212] ">
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

          {/* second div  */}
          <div className="bg-[#121212] mb-2 rounded-lg overflow-hidden h-[698px]">
            <div className="h-full overflow-y-auto no-scrollbar">

              <div className="bg-[#121212] h-14 fixed  z-10 w-[777px]">

                <div className="flex gap-2 mt-4 ml-6 text-white ">
                  <button onClick={() => setActive("All")} className={` text-black ${active === "All" ? "bg-white" : "bg-transparent text-white"}  py-1 px-4 rounded-3xl cursor-pointer`}>All</button>
                  <button onClick={() => setActive("Music")} className={` text-black ${active === "Music" ? "bg-white" : "bg-transparent text-white"}  py-1 px-4 rounded-3xl cursor-pointer`}>Music</button>
                  <button onClick={() => setActive("Podcast")} className={` text-black ${active === "Podcast" ? "bg-white" : "bg-transparent text-white"}  py-1 px-4 rounded-3xl cursor-pointer`}>prodcast</button>
                </div>
              </div>

              <div className=" mt-18 ml-6 mr-8 text-white grid grid-cols-4 gap-2">
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
              <div className="ml-6 mt-2">
                <p className="text-white text-sm">Made for</p>
                {/* <h5>{user.name}</h5> */}
              </div>

              <div className="grid lg:grid-cols-4 ml-6 mt-4">

                {renderContent()}
              </div>
            </div>
          </div>

          {/* Third div  */}
          <div className="bg-[#121212] mb-2 rounded-lg overflow-hidden">

          </div>

        </div>
      </div>


    </>
  );
}
