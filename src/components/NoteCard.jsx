import React from "react";

const NoteCard = ({ item }) => {
  return (
    <article key={item.id} className="block max-w-sm p-5 bg-white border-dashed border-2 border-amber rounded-lg">
      <h3 className="mt-2 text-lg font-bold leading-6">
        <span className="absolute" />
        {item.title}
      </h3>
      <div className="group relative">
      <time dateTime={item.datetime} className="text-amber text-xs">
          {item.createdAt.toLocaleDateString()}
        </time>
        <p className="text-justify mt-5 line-clamp-6 text-sm leading-6 text-gray-600">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default NoteCard;