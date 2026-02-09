"use client"
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

      <div >

          {/* second div  */}
          <div className="bg-[#121212] w-full mb-2 rounded-lg overflow-hidden h-[638px]">
            <div className="h-full overflow-y-auto no-scrollbar">

              <div className="bg-[#121212] h-14 fixed rounded-lg z-10 w-[777px]">

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
        </div>

    </>
  );
}
