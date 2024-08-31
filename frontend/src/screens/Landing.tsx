import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex bg-gray-900">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 ">
          <div className="pl-8 pr-8">
            <img src="/chessboard.png" alt="Chessboard" />
          </div>
          <div className="p-8 rounded-lg text-center text-white">
            <h1 className="text-4xl font-bold">Play Chess Online</h1>
            <p className="mt-4 text-gray-400">on the #1 Site!</p>
            <p className="mt-2 text-gray-400">
              14,197,762 Games Today | 92,803 Playing Now
            </p>
            <div className="mt-8 space-y-4 grid grid-cols-1 justify-items-center">
              <button
                className="w-full max-w-xs py-6 bg-green-500 rounded-lg font-bold text-3xl hover:bg-green-600"
                onClick={() => navigate("/game")}
              >
                Play Online
              </button>
              <button className="w-full max-w-xs py-6 bg-gray-700 rounded-lg font-bold text-2xl hover:bg-gray-600">
                Play Computer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
