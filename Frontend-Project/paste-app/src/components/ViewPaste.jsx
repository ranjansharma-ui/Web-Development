import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  if (!paste) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-600">Paste not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">View Paste</h1>
        <div className="text-sm text-gray-500">
          Created: {new Date(paste.createdAt).toLocaleString()}
        </div>
      </div>

      {/* Paste Content */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Title Section */}
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <input
            className="w-full text-2xl font-bold bg-transparent border-none focus:outline-none text-gray-800"
            type="text"
            value={paste.title}
            disabled
            readOnly
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <pre className="whitespace-pre-wrap font-sans text-gray-700 bg-gray-50 p-4 rounded-lg overflow-auto max-h-[70vh]">
            {paste.content}
          </pre>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={() => {
              navigator.clipboard.writeText(paste.content);
              alert("Copied to clipboard!");
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Copy Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;