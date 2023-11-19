import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { addNote } from "../utils/local";

const AddPage = () => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const navigate = useNavigate();
    
    function onTitleHandler(event) {
        setTitle(event.target.value);
    }

    function onDescriptionHandler(event) {
        setDescription(event.target.value);
    }
    
    function onSubmitHandler(event) {
        event.preventDefault();
        const newNote = {
            title: title,
            description: description,
            createdAt: new Date(),
        };
        addNote(newNote);
        navigate("/");
    }

    return(
        <div className="bg-white px-6 py-16 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold text-amber-800">
                    Add Note
                </h2>
            </div>
            <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                <form onSubmit={onSubmitHandler}>
                    <div className="sm:col-span-4">
                        <label
                            for="title"
                            className="block text-amber-800 font-semibold">
                            Title
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-slate-600 rounded-lg"
                                onChange={onTitleHandler}
                            />
                        </div>
                    </div>
                    <div className="mt-2 sm:col-span-4">
                        <label
                            for="description"
                            className="block text-amber-800 font-semibold">
                            Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="description"
                                name="description"
                                rows={5}
                                className="block w-full rounded-md border border-slate-600 px-3.5 py-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                                defaultValue={''} 
                                onChange={onDescriptionHandler}
                            />
                        </div>    
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link to="/">
                            <button 
                                type="button" 
                                className="text-sm px-2 py-1 font-semibold leading-6 text-gray-900 shadow-md border rounded-lg hover:bg-slate-200">
                                Cancel
                            </button>
                        </Link>
                        <button
                            type="submit"
                            className="bg-amber-900 text-white text-sm px-4 py-1 font-semibold leading-6 text-white shadow-md border rounded-lg hover:bg-white hover:text-amber-900">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPage;