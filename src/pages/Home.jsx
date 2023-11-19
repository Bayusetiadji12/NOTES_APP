import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchNote from "../components/SearchNote";
import AddNote from "../components/AddNote";
import { getNotes, deleteNote } from "../utils/local";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await getNotes();
      setNotes(data);
    };
    fetchNotes();
  }, [keyword]);

  const searchHandler = (keyword) => {
    setKeyword(keyword);
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLocaleLowerCase());
  });

  const onDeleteHandler = (id) => {
    deleteNote(id);
    setNotes(getNotes());
  };

  return (
    <div className="bg-white py-24 sm:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold text-amber-800">
            NoteBook
          </h2>
        </div>
        <div className="mx-auto pt-5 mb-3 xl:w-96">
          <div>
            <SearchNote searchHandler={searchHandler} />
          </div>
        </div>
        <div className="mx-auto mt-10 border-t border-amber-800 pt-10 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div className="mb-3 lg:text-center">
            <Link to="/add">
              <AddNote />
            </Link>
        </div>
          <NoteList notes={filteredNotes}
          onDelete={onDeleteHandler} />
        </div>
      </div>
    </div>
  );
};

export default Home;