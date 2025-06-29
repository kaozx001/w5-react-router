import React, { useState, useEffect } from "react";

function NotFound() {
  const [countdown, setCountdown] = useState(5);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Show alert after 2 seconds
    const alertTimer = setTimeout(() => {
      setShowAlert(true);
    }, 2000);

    // Start countdown after alert shows
    const countdownTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            window.location.href = "/";
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 2000);

    return () => {
      clearTimeout(alertTimer);
      clearTimeout(countdownTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Alert notification */}
      {showAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-lg">
            <div className="flex items-center space-x-3">
              <div className="text-2xl animate-bounce">⚠️</div>
              <div>
                <p className="font-semibold text-lg">กำลังเปลี่ยนเส้นทาง</p>
                <p className="text-sm opacity-90">
                  จะพาคุณกลับไปหน้าหลักใน{" "}
                  <span className="font-bold text-yellow-200">{countdown}</span>{" "}
                  วินาที
                </p>
              </div>
              <button
                onClick={() => setShowAlert(false)}
                className="text-white/80 hover:text-white text-xl font-bold hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Large 404 with glow effect */}
        <div className="mb-8 relative">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-none select-none animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-blue-400 opacity-20 blur-sm animate-pulse">
            404
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-pink-400 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-20 left-16 w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-2000"></div>

        {/* Glass morphism card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-blue-200 mb-2">
              ไม่พบหน้าที่คุณกำลังค้นหา
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              The page you're looking for seems to have wandered off into the
              digital void. Don't worry, even the best explorers sometimes take
              a wrong turn!
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.history.back()}
                className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <span className="relative z-10">← Go Back</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => (window.location.href = "/")}
                className="group relative px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">🏠 Home</span>
              </button>
            </div>

            {/* Decorative elements */}
            <div className="flex justify-center items-center space-x-4 mt-8 text-4xl">
              <span className="animate-bounce">🌟</span>
              <span className="">🚀</span>
              <span className="">✨</span>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-sm text-gray-400 mt-8">
          Lost in space? Our digital compass is here to guide you home.
        </p>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            transform: translate3d(0, -30px, 0);
          }
          70% {
            transform: translate3d(0, -15px, 0);
          }
          90% {
            transform: translate3d(0, -4px, 0);
          }
        }
      `}</style>
    </div>
  );
}

export default NotFound;
