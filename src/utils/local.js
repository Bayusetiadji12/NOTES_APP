let notes = [
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

function getNotes() {
  return notes;
}

function addNote(note) {
  const id = notes.length + 1;
  note.id = id;   
  notes.push(note);
  return id;
}

function deleteNote(id) {
  notes = notes.filter((notes) => notes.id !== id);
}

export { getNotes, addNote, deleteNote };