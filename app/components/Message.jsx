export default function Message({ text, date, role }) {
  return (
    <>
      {role === "admin" ? (
        <>
          <div className="mb-2">
            <div
              id="message-content"
              className="bg-background-gray p-1.5 flex items-center"
            >
              <p className="p-1 text-sm">{text}</p>
            </div>
            <div id="message-date" className="flex mt-2">
              <p className="text-xs opacity-45 border-dotted border-b border-gray-400">
                {date} ({role})
              </p>
              <p className="text-xs text-red-700 border-b border-red-700 cursor-pointer">
                Notu Sil
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mb-2">
            <div
              id="message-content"
              className="bg-message-pink p-1 flex items-center"
            >
              <p className="p-1 text-sm">{text}</p>
            </div>
            <div id="message-date" className="flex mt-2">
              <p className="text-xs opacity-45 border-dotted border-b border-gray-400">
                {date}
              </p>
              <p className="text-xs text-red-700 border-b border-red-700 cursor-pointer">
                Notu Sil
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
