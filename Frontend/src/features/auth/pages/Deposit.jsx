import { useNavigate } from "react-router-dom";

export default function Deposit() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b1120] flex items-center justify-center px-4 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-3xl">

        <div className="bg-[#111827] border border-white/10 rounded-[40px] p-10 md:p-16 text-center shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

          {/* Icon */}
          <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-5xl shadow-lg shadow-indigo-500/20">
            🏦
          </div>

          {/* Badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
            Feature Under Development
          </div>

          {/* Title */}
          <h1 className="mt-8 text-5xl md:text-6xl font-bold tracking-tight">
            Deposit Money
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            We're building a secure and seamless deposit experience.
            This feature will be available soon.
          </p>

          {/* Progress */}
          <div className="mt-10 max-w-md mx-auto">

            <div className="flex justify-between text-sm text-gray-400 mb-3">
              <span>Development Progress</span>
              <span>80%</span>
            </div>

            <div className="h-3 rounded-full bg-[#1e293b] overflow-hidden">
              <div className="h-full w-[80%] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">

            <button
              onClick={() => navigate("/my-account")}
              className="px-8 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-600 transition font-medium shadow-lg shadow-indigo-500/20"
            >
              Back to Account
            </button>

            <button
              onClick={() => navigate("/")}
              className="px-8 py-4 rounded-2xl bg-[#1e293b] hover:bg-[#26354d] transition font-medium"
            >
              Home
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
