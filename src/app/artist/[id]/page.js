"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ArtistPage() {
  const { id } = useParams(); // name from the URL

  // artist data
  const artistName = [
    { id: 1, name: "Sukhbir", img: "/img1.jpg" },
    { id: 2, name: "Shaan", img: "/img2.jpg" },
    { id: 3, name: "Jonita Gandhi", img: "/img3.jpg" },
    { id: 4, name: "Rochak Kohli", img: "/img4.jpg" },
    { id: 5, name: "Mika Singh", img: "/img5.jpg" },
    { id: 6, name: "Samita", img: "/img6.jpg" },
    { id: 7, name: "B Park", img: "/img7.jpg" },
    { id: 8, name: "Mika Singh", img: "/img8.jpg" },
    { id: 9, name: "Samita", img: "/img9.jpg" },
    { id: 10, name: "B Park", img: "/img10.jpg" },
    { id: 11, name: "Mika Singh", img: "/img11.jpg" },
    { id: 12, name: "Samita", img: "/img12.jpg" },
    { id: 13, name: "B Park", img: "/img13.jpg" },
    { id: 14, name: "B Park", img: "/img14.jpg" },
    { id: 15, name: "Mika Singh", img: "/img15.jpg" },
    { id: 16, name: "Samita", img: "/img16.jpg" },
  ];

  // Find the artist object that matches the name from useParams
   const artistNameFromURL = decodeURIComponent(id);
  const artist = artistName.find(
    (artist) => artist.name.toLowerCase() === artistNameFromURL.toLowerCase()
  );

  return (
    <div className="text-white">
      <div className="flex flex-col gap-6">
        <div className="relative w-full h-80 overflow-hidden">
          {artist ? (
            <Image src={artist.img} alt={artist.name} fill className="object-cover" />
          ) : (
            <div className="bg-gray-700 w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>
        <div className=" p-4 ">
          <p className="text-gray-400">Artist</p>
          <h1 className="text-5xl font-bold">{artist ? artist.name : "Unknown Artist"}</h1>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl mb-4  p-4 ">Popular</h2>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-3 hover:bg-gray-700 rounded-lg">
            Song {i}
          </div>
        ))}
      </div>
    </div>
  );
}

