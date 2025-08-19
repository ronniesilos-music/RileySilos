export default function Music() {
  return (
    <div className="max-w-2xl mx-auto text-center p-6 space-y-6">
      <h2 className="text-3xl font-semibold mb-4">Listen to My Songs</h2>
      <iframe
        src="https://open.spotify.com/embed/album/YOUR_ALBUM_ID"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-xl shadow-lg"
      ></iframe>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-xl shadow-lg"
      ></iframe>
    </div>
  );
}
