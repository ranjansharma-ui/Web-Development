import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
    toast.success("Paste deleted successfully");
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Search Bar */}
      <div className="mb-8">
        <input
          className="w-full p-4 text-lg border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          type="text"
          placeholder="Search pastes by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Paste List */}
      <div className="space-y-6">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div
              key={paste._id}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              {/* Paste Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-gray-800 truncate max-w-[70%]">
                  {paste.title}
                </h2>
                <div className="text-sm text-gray-500 whitespace-nowrap">
                  Created: {new Date(paste.createdAt).toLocaleString()}
                </div>
              </div>

              {/* Paste Content */}
              <div className="p-6 bg-white">
                <pre className="whitespace-pre-wrap font-sans text-gray-700">
                  {paste.content}
                </pre>
              </div>

              {/* Action Buttons */}
              <div className="bg-gray-50 px-6 py-4 flex flex-wrap justify-between items-center gap-3">
                <div className="flex flex-wrap gap-3">
                  <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-black rounded-lg transition-colors duration-200 flex items-center gap-1 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    <a href={`/?pasteId=${paste._id}`}>Edit</a>
                  </button>

                  <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-black rounded-lg transition-colors duration-200 flex items-center gap-1 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <a href={`/pastes/${paste._id}`}>View</a>
                  </button>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste.content);
                      toast.success("Copied to clipboard!");
                    }}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-black rounded-lg transition-colors duration-200 flex items-center gap-1 text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                    Copy
                  </button>

                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: paste.title,
                          text: paste.content,
                          url: window.location.href,
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        toast.success("Link copied to clipboard!");
                      }
                    }}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-black rounded-lg transition-colors duration-200 flex items-center gap-1 text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                    Share
                  </button>
                </div>

                <button
                  onClick={() => handleDelete(paste._id)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-black rounded-lg transition-colors duration-200 flex items-center gap-1 text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">
              No pastes found matching your search
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Paste;
