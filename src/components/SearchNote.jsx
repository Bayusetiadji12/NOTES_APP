import React from "react";

const SearchNote = ({ searchHandler }) => {
    return (
        <input
        type="search"
        id="searchNote"
        onChange={(event) => searchHandler(event.target.value)}
        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(191,89,15)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        placeholder="Search Note" />
    );
};

export default SearchNote;