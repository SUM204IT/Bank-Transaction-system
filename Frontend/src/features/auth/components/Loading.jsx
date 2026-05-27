export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#0b1120] flex items-center justify-center overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl right-20 bottom-10 animate-pulse" />

      {/* Loader Container */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Spinner */}
        <div className="relative w-20 h-20">

          <div className="absolute inset-0 rounded-full border-[3px] border-indigo-500/20" />

          <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-indigo-500 border-r-indigo-400 animate-spin" />

          <div className="absolute inset-3 rounded-full bg-[#111827] border border-white/5" />

        </div>

        {/* Text */}
        <div className="mt-8 text-center">

          <h2 className="text-xl font-semibold text-gray-100 tracking-wide">
            Loading
          </h2>

          <p className="text-sm text-gray-400 mt-2">
            Please wait while we prepare your experience.
          </p>

        </div>

        {/* Animated Dots */}
        <div className="flex gap-2 mt-5">

          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" />

          <span
            className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          />

          <span
            className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          />

        </div>

      </div>
    </div>
  );
}