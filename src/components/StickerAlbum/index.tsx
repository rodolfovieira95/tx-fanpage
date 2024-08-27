"use client";
import { useState } from "react";
import Postcard from "../Postcard";
import { artists, userCollectedStickerts } from "@/utils/artists";

export default function StickerAlbum() {
  const [currentPage, setCurrentPage] = useState(0);
  const stickersPerPage = 8;
  const totalPages = Math.ceil(artists.length / stickersPerPage);

  const getStickersForPage = (pageIndex: number) => {
    const startIndex = pageIndex * stickersPerPage;
    return artists.slice(startIndex, startIndex + stickersPerPage);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="relative w-2/3 h-5/6 bg-white shadow-xl rounded-md overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${totalPages * 100}%`,
              transform: `translateX(-${currentPage * (100 / totalPages)}%)`,
            }}
          >
            {Array.from({ length: totalPages }, (_, pageIndex) => (
              <div
                key={pageIndex}
                className="w-full h-full flex justify-around items-start flex-wrap"
                style={{ width: `calc(100% / ${totalPages})` }}
              >
                {getStickersForPage(pageIndex).map(({ id, img, name }) => (
                  <div key={id} className="max-w-[180px]">
                    <Postcard
                      id={id}
                      img={img}
                      userCollectedStickerts={userCollectedStickerts}
                    />
                    <h1 className="font-bold px-1">{name}</h1>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevPage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-r-md shadow-md"
        >
          Prev
        </button>

        <button
          onClick={nextPage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-l-md shadow-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
