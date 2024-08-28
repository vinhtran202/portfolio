import ReactPlayer from "react-player";

export default function Contact() {
  return (
    <div className="mx-auto text-black text-lg font-normal h-[100vh]">
      <div className="flex justify-between">
        <div className="w-1/2">
          {/* <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
            alt="beach"
            className="w-full h-full object-cover object-center shadow-md mb-2"
          /> */}
          <ReactPlayer
            url="https://www.youtube.com/embed/zM0ZU9ltOjE?si=NxB6RLcIHqzt26Ca"
            className="w-full h-full object-cover object-center  mb-2"
            width="100%"
            height="100%"
            muted
            playing
            loop
          />
        </div>
        <div className="w-1/2 p-16">
          <div className="text-black font-normal mb-5">
            <h2 className="text-4xl leading-relaxed mb-5">Contact</h2>
            <form>
              <input
                type="text"
                id="name"
                placeholder="First name ..."
                className="w-[51%] px-5 py-3 mb-4 border border-gray-300 rounded-md box-border"
              />
              <input
                type="text"
                id="name"
                placeholder="Last name ..."
                className="w-[51%] px-5 py-3 mb-4 border border-gray-300 rounded-md box-border"
              />
              <input
                type="text"
                id="email-subject"
                placeholder="Email ..."
                className="w-full px-5 py-3 mb-4 border border-gray-300 rounded-md box-border"
              />
              <input
                type="text"
                id="email-subject"
                placeholder="Subject ..."
                className="w-full px-5 py-3 mb-4 border border-gray-300 rounded-md box-border"
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message ..."
                className="w-full px-5 py-3 mb-4 border border-gray-300 rounded-md box-border"
              ></textarea>
              <button className="w-full bg-[#ff9000] text-white py-3 px-5 mb-2 rounded-lg cursor-pointer transition-all duration-500 hover:bg-[#ff910093] hover:text-black">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
