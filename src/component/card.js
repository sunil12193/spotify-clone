import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Card = ({ album, title }) => {
  const router = useRouter();

  console.log(title, "album data in card component");

  return (
    <>
      <h2 className="text-xl mb-4 mt-8 text-white">
        {title}
      </h2>
      <div className="flex">

      {album.map((album, index) => (
        <div
          key={index}
          onClick={() => router.push(`/artist/${album.name}`)}
          className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer
                     text-white w-40 h-auto flex-shrink-0"
        >
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
      ))}
      </div>

    </>
  );
};


export default Card;