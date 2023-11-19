import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const NoteCard = ({ note, onDelete }) => {
  return (
    <article key={note.id} className="block max-w-sm p-5 bg-white border-solid border-2 border-amber-800 rounded-lg">
      <div className="flex">
        <h3 className="flex-auto mt-2 text-lg font-bold leading-6">
          <span className="absolute" />
          {note.title}
        </h3>
         <button className="flex-end hover:text-red-600" onClick={() => onDelete(note.id)}>
           <FaTrashAlt />
         </button>
      </div>
      <div className="group relative">
        <time dateTime={note.datetime} className="text-amber-800 text-xs">
          {note.createdAt.toLocaleDateString()}
        </time>
        <p className="text-justify mt-5 line-clamp-6 text-sm leading-6 text-gray-600">
          {note.description}
        </p>
      </div>
    </article>
  );
}

export default NoteCard;