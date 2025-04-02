import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    if (!title.trim() || !value.trim()) {
      alert("Please enter both title and content");
      return;
    }

    const paste = {
      title: title.trim(),
      content: value.trim(),
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col w-full">
      {/* Header - Full width */}
      <header className="bg-white shadow-sm w-full py-6 px-4">
        <h1 className="text-3xl font-bold text-gray-900">
          {pasteId ? "Edit Paste" : "Create New Paste"}
        </h1>
      </header>

      {/* Main Content - Full width */}
      <main className="flex-grow w-full p-4">
        <div className="bg-white shadow rounded-lg w-full">
          {/* Form Section */}
          <div className="p-6 border-b border-gray-200 w-full">
            <div className="flex flex-col space-y-4 w-full">
              <div className="w-full">
                <label
                  htmlFor="title"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Paste Title
                </label>
                <input
                  id="title"
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  placeholder="Enter title here"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="content"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Paste Content
                </label>
                <textarea
                  id="content"
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[400px]"
                  value={value}
                  placeholder="Enter your content here..."
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="bg-gray-50 p-4 flex justify-end w-full">
            <button
              onClick={createPaste}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-black font-medium rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {pasteId ? "Update Paste" : "Create Paste"}
            </button>
          </div>
        </div>
      </main>

      {/* Footer - Full width */}
      <footer className="bg-white border-t border-gray-200 w-full py-4 px-4">
        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} Pastebin Clone
        </p>
      </footer>
    </div>
  );
};

export default Home;
