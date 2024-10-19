import React, { memo, useContext, useEffect, useState } from "react";
import { Context } from "../../store/Store";

const Dropdown = ({ handleSorting, setIsDropdownOpen, setSort }) => {
  const { data } = useContext(Context);
  const [genre, setGenre] = useState();
  const LoadingList = Array(20).fill(null);

  const categoryWiseBook = () => {
    const category = data.reduce((total, value) => {
      const subject = value.subjects;
      const allSubjects = [...total, ...subject].toSorted();
      return [...new Set(allSubjects)];
    }, []);

    setGenre(category);
  };

  useEffect(() => {
    categoryWiseBook();
  }, []);
  return (
    <div className="w-[330px] sm:w-[450px] h-[calc(100vh-70px)] absolute left-0 top-10 overflow-hidden z-10 ring-1 ring-gray-100 rounded-md ">
      <div className="w-full h-full text-black overflow-y-scroll bg-slate-200 py-4">
        <button
          onClick={() => {
            setSort("");
            setIsDropdownOpen(false);
          }}
          className="w-full hover:bg-slate-300 text-left p-1 border-l-4 hover:border-primaryColor transition-all line-clamp-1 "
        >
          All
        </button>
        {genre?.length > 0
          ? genre.map((genre, i) => {
              return (
                <button
                  onClick={(e) => {
                    handleSorting(e);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full hover:bg-slate-300 text-left p-1 border-l-4 hover:border-primaryColor transition-all line-clamp-1 "
                  name="sort"
                  value={genre}
                  key={i}
                >
                  {genre}
                </button>
              );
            })
          : LoadingList.map((item, i) => {
              return (
                <button
                  key={i}
                  className="w-full p-2 bg-slate-300 animate-pulse rounded"
                ></button>
              );
            })}
      </div>
    </div>
  );
};

export default memo(Dropdown);
