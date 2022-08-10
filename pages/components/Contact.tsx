import { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/9b505f66-a5d1-4708-9ffd-77cfe4b6669a"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-300 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit The Form Below or Shoot Me An Email - ljcutts3@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2.5 rounded-sm"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2.5 bg-[#ccd6f6] rounded-sm"
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-sm"
          name="message"
          rows={10}
          placeholder="Message"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
        ></textarea>
        {(name === "" || email === "" || message === "") && (
          <div className="text-white border-2 opacity-50 px-4 py-3 my-8 mx-auto flex items-center">
            Lets Collaborate
          </div>
        )}
        {name !== "" && email !== "" && message !== "" && (
          <button className="text-white border-2 hover:text-[#0a192f] hover:bg-yellow-300 hover:border-yellow-300 px-4 py-3 my-8 mx-auto flex items-center">
            Lets Collaborate
          </button>
        )}
      </form>
    </div>
  );
};

export default Contact;
