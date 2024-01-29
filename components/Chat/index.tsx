"use client";

import {useEffect, useRef, useState} from "react";

import {getChatAnswer} from "./actions";

function Chat({initialMessage}: {initialMessage: string}) {
  const [messages, setMessages] = useState<
    {
      id: string;
      type: "bot" | "user";
      text: string;
    }[]
  >(() =>
    initialMessage
      ? [
          {
            id: "1",
            type: "bot",
            text: initialMessage,
          },
        ]
      : [],
  );
  const [question, setQuestion] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const container = useRef<HTMLDivElement>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessages((messages) =>
      messages.concat({id: String(Date.now()), type: "user", text: question}),
    );
    setQuestion("");

    const text = await getChatAnswer(question);

    setMessages((messages) =>
      messages.concat({
        id: String(Date.now()),
        type: "bot",
        text,
      }),
    );

    setLoading(false);
  }

  useEffect(() => {
    container.current?.scrollTo(0, container.current.scrollHeight);
  }, [messages]);

  return (
    <main>
      <div className="flex flex-col gap-4 m-auto border border-black/10 dark:border-white/10 p-4 rounded-md">
        <div ref={container} className="flex flex-col gap-4 h-[480px] overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 max-w-[80%] rounded-3xl text-white ${
                message.type === "bot"
                  ? "bg-primary-800 text-left self-start rounded-bl-none"
                  : "bg-primary-700 text-right self-end rounded-br-none"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form className="flex items-center" onSubmit={handleSubmit}>
          <input
            className="rounded rounded-r-none flex-1 border border-black/10 dark:border-white/10 text-black py-2 px-4"
            name="question"
            placeholder="Who are you?"
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
          <button
            className={`px-4 py-2 text-primary-50 bg-primary-500 rounded-lg rounded-l-none ${
              loading ? "bg-primary-300" : "bg-primary-500"
            }`}
            disabled={loading}
            type="submit"
          >
            {loading ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Chat;
