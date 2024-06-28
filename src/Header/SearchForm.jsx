import React from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    let value = e.target.search.value.trim();

    navigate(`/search?title=*${value}`);
  };

  const handleButton = (e) => {
    e.preventDefault();
    const value = e.currentTarget.form.search.value.trim();
    navigate(`/search?title=*${value}`);
  };

  const handleData = (value) => {};

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="flex justify-between items-center w-[480px] h-[40px] rounded-[10px]"
      >
        <input
          className="mx-auto border-2 border-[#006bff] w-11/12 h-full rounded-r-0 py-[5px] px-[10px] rounded-l-[10px] placeholder:text-[13px] text-[#006bff] placeholder:text-[#a4aab5] min-w-[200px] focus:outline-none"
          type="text"
          name="search"
          onChange={(e) => handleData(e.target.value)}
          placeholder="Qidirish..."
        />
        <button
          onClick={handleButton}
          className="bg-[#006bff] text-white h-full py-[6px] px-[12px] rounded-r-[10px]"
        >
          Qidirish
        </button>
      </form>
    </div>
  );
};

export default Search;
