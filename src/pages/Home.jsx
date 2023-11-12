import React from "react";
import NoteCard from "../components/NoteCard";

const Home = () => {
  const items = [
    {
      id: 1,
      title: 'Tugas Matematika',
      description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum impedit minima, ea reprehenderit asperiores vitae ipsa deleniti aut. Atque repudiandae voluptas libero non, officia commodi fugit nesciunt minima asperiores nostrum!',
      createdAt: new Date()
    },
    {
      id: 2,
      title: 'Tugas Kimia',
      description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum impedit minima, ea reprehenderit asperiores vitae ipsa deleniti aut. Atque repudiandae voluptas libero non, officia commodi fugit nesciunt minima asperiores nostrum!',
      createdAt: new Date()
    },
    {
      id: 3,
      title: 'Tugas Sejarah',
      description: 
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum impedit minima, ea reprehenderit asperiores vitae ipsa deleniti aut. Atque repudiandae voluptas libero non, officia commodi fugit nesciunt minima asperiores nostrum!',
      createdAt: new Date()
    },

  ];
  return (
    <div className="bg-white py-24 sm:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold text-amber">
            NoteBook
          </h2>
        </div>
        <div className="mx-auto pt-5 mb-3 xl:w-96">
          <input
            type="search"
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(191,89,15)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            id="searchNote"
            placeholder="Search Note" />
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-amber pt-10 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {items.map((item) => (
          <NoteCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;