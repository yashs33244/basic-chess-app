export const Sidebar = () => {
  return (
    <div className="w-48 bg-black text-white flex flex-col justify-between p-4 md:w-48">
      <div>
        <div className="text-green-500 text-2xl font-bold mb-8">
          Mychess.com
        </div>
        <nav className="space-y-4">
          <a
            href="#"
            className="flex items-center text-green-400 hover:bg-gray-200 hover:text-black text-black bg-gray-800 p-2 rounded"
          >
            <span className="icon-play mr-2"></span>
            Play
          </a>
          <a
            href="#"
            className="flex items-center text-gray-400 hover:text-white"
          >
            <span className="icon-puzzle mr-2"></span>
            Puzzles
          </a>
          <a
            href="#"
            className="flex items-center text-gray-400 hover:text-white"
          >
            <span className="icon-learn mr-2"></span>
            Learn
          </a>
          <a
            href="#"
            className="flex items-center text-gray-400 hover:text-white"
          >
            <span className="icon-watch mr-2"></span>
            Watch
          </a>
          <a
            href="#"
            className="flex items-center text-gray-400 hover:text-white"
          >
            <span className="icon-news mr-2"></span>
            News
          </a>
          <a
            href="#"
            className="flex items-center text-gray-400 hover:text-white"
          >
            <span className="icon-social mr-2"></span>
            Social
          </a>
          <a
            href="#"
            className="flex items-center text-gray-400 hover:text-white"
          >
            <span className="icon-more mr-2"></span>
            More
          </a>
        </nav>
      </div>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 bg-gray-700 text-white rounded"
        />
        <button className="w-full py-2 bg-gray-700 text-white rounded">
          Sign Up
        </button>
        <button className="w-full py-2 bg-green-500 text-white rounded">
          Log In
        </button>
      </div>
    </div>
  );
};
