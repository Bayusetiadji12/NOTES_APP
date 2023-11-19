import React from "react";
import NoteCard from "./NoteCard";

function NoteList({ notes, onDelete }) {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
        {notes.length === 0 ? (
          <p>Nothing To Show</p>
        ) : (
          notes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={onDelete} {...note}/>
          ))
        )}
    </div>

  );
}

export default NoteList;