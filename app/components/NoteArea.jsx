import { useState } from "react";

export default function NoteArea({ setData }) {
  const [message, setMessage] = useState({
    role: "",
    message: "",
    date: new Date().toLocaleDateString,
  });

  const handleAddMessage = () => {
    if (message.message == null || message.message == "") {
      alert("Boş özel not gönderemezsiniz!");
    } else {
      setData((prevData) => ({
        ...prevData,
        messages: [message, ...prevData.messages],
      }));
    }
    setMessage({
      role: "",
      message: "",
      date: new Date().toLocaleDateString,
    });
  };
  return (
    <>
      <div className="mt-3 mx-1">
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
              className="w-full border rounded-md max-h-36 resize-none"
            ></textarea>
          </div>
          <div className="flex mt-2 gap-2 float-right me-1">
            <button
              onClick={handleAddMessage}
              className="bg-sky-600 text-white border py-1.5 px-2 rounded-md hover:bg-sky-700 hover:scale-105 hover:transition-all hover:duration-500 hover:ease-in-out"
            >
              Ekle
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
