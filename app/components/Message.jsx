export default function Message({ text, date, role }) {
  return (
    <>
      {role === "admin" ? (
        <>
          <div>
            <div
              id="message-content"
              className="bg-background-gray p-1.5 flex items-center"
            >
              <p className="p-1 text-sm md:text-base ">{text}</p>
            </div>
            <div id="message-date" className="flex mt-2">
              <p className="text-xs sm:text-sm  border-dotted border-b">
                {date} ({role})
              </p>
              <p className="text-xs sm:text-sm text-red-700 border-b border-red-700 cursor-pointer">
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
              <p className="p-1 text-sm md:text-base">{text}</p>
            </div>
            <div id="message-date" className="flex mt-2">
              <p className="text-xs sm:text-sm border-dotted border-b">
                {date}
              </p>
              <p className="text-xs sm:text-sm text-red-700 border-b border-red-700 cursor-pointer">
                Notu Sil
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
