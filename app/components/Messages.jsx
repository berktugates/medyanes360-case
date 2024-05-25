
import Message from "./Message";

export default function Messages({ messages, setData }) {
  return (
    <>
      <div>
        <h1 className="text-lg py-1 border-b-2 font-semibold">
          Sipariş Notları
        </h1>
        <div className="max-h-96 overflow-y-auto">
          <div id="message-content" className="p-2">
            {messages.map((message, index) => {
              return (
                <Message
                  key={index}
                  text={message.message}
                  date={message.date}
                  role={message.role}
                />
              );
            })}

            <hr className="mt-3" />
          </div>
        </div>
      </div>
    </>
  );
}
