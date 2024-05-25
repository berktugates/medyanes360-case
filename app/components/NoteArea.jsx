import { useState } from "react";

export default function NoteArea({ setData }) {
  const [message, setMessage] = useState({
    role: "",
    message: "",
    date: new Date().toLocaleDateString,
  });

  const handleAddMessage = () => {
    if (message.message == null || message.message == "") {
      alert("Boş özel not gönderemezsiniz!")
    } else {
      setData((prevData) => ({
        ...prevData,
        messages: [message, ...prevData.messages],
      }));
    }
    setMessage({
      role:"",
      message: "",
      date: new Date().toLocaleDateString,
    });
  };
  return (
    <>
      <div className="mt-3">
        <div id="header-div" className="mt-1">
          <h1>Not Ekle</h1>
        </div>
        <div id="form-area">
          <div>
            <textarea
              value={message.message}
              onChange={(e) =>
                setMessage({ ...message, message: e.target.value })
              }
              className="w-full border rounded-md max-h-32 "
            ></textarea>
          </div>
          <div className="flex mt-3 gap-2">
            <select className="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Özel Not</option>
            </select>
            <button
              onClick={handleAddMessage}
              className="border-blue-400 border p-1 rounded-md text-blue-600 hover:text-white hover:bg-blue-400 hover:scale-105 hover:transition-all"
            >
              Ekle
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
