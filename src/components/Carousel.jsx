import { useState } from "react";
import { motion } from "framer-motion";

const covers = [
  {
    src: "/covers/album1.jpg",
    title: "First Album",
    spotify: "https://open.spotify.com/album/YOUR_ALBUM_ID",
    youtube: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    src: "/covers/album2.jpg",
    title: "Live EP",
    spotify: "https://open.spotify.com/album/YOUR_ALBUM_ID",
    youtube: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    src: "/covers/album3.jpg",
    title: "Hit Single",
    spotify: "https://open.spotify.com/track/YOUR_TRACK_ID",
    youtube: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % covers.length);
  const prev = () => setCurrent((prev) => (prev - 1 + covers.length) % covers.length);

  return (
    <div className="flex justify-center mt-10 space-x-6">
      <button onClick={prev} className="text-2xl font-bold">◀</button>
      <div className="relative w-64 h-64 group">
        <motion.img
          key={current}
          src={covers[current].src}
          alt={covers[current].title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center rounded-2xl transition">
          <h2 className="text-white text-lg font-semibold">{covers[current].title}</h2>
          <div className="flex space-x-3 mt-2">
            <a
              href={covers[current].spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
            >
              ▶ Spotify
            </a>
            <a
              href={covers[current].youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition"
            >
              ▶ YouTube
            </a>
          </div>
        </div>
      </div>
      <button onClick={next} className="text-2xl font-bold">▶</button>
    </div>
  );
}
