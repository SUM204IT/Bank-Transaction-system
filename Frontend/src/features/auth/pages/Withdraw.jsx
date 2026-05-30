import { useNavigate } from "react-router-dom";

export default function Withdraw() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b1120] flex items-center justify-center px-4 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-4xl">

        <div className="bg-[#111827] border border-white/10 rounded-[40px] p-10 md:p-16 text-center shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

          {/* Icon */}
          <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-5xl shadow-lg shadow-rose-500/20">
            💸
          </div>

          {/* Badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
            Feature Under Development
          </div>

          {/* Title */}
          <h1 className="mt-8 text-5xl md:text-6xl font-bold tracking-tight">
            Withdraw Money
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Withdrawals are currently under development. To ensure
            maximum security and fraud prevention, cash withdrawals
            will only be available through authorized Bankify ATMs
            located inside designated bank ATM rooms.
          </p>

          {/* Progress */}
          <div className="mt-10 max-w-md mx-auto">

            <div className="flex justify-between text-sm text-gray-400 mb-3">
              <span>Development Progress</span>
              <span>75%</span>
            </div>

            <div className="h-3 rounded-full bg-[#1e293b] overflow-hidden">
              <div className="h-full w-[75%] bg-gradient-to-r from-rose-500 to-orange-400 rounded-full" />
            </div>

          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-4 mt-12">

            <div className="bg-[#1e293b] rounded-2xl p-5 border border-white/5">
              <div className="text-3xl mb-3">🔒</div>

              <h3 className="font-semibold">
                Secure Access
              </h3>

              <p className="text-xs text-gray-400 mt-2">
                Bank-grade security verification.
              </p>
            </div>

            <div className="bg-[#1e293b] rounded-2xl p-5 border border-white/5">
              <div className="text-3xl mb-3">🏧</div>

              <h3 className="font-semibold">
                ATM Room Only
              </h3>

              <p className="text-xs text-gray-400 mt-2">
                Available only inside Bankify ATM rooms.
              </p>
            </div>

            <div className="bg-[#1e293b] rounded-2xl p-5 border border-white/5">
              <div className="text-3xl mb-3">⚡</div>

              <h3 className="font-semibold">
                Fast Processing
              </h3>

              <p className="text-xs text-gray-400 mt-2">
                Instant withdrawal authorization.
              </p>
            </div>

            <div className="bg-[#1e293b] rounded-2xl p-5 border border-white/5">
              <div className="text-3xl mb-3">🛡️</div>

              <h3 className="font-semibold">
                Fraud Protection
              </h3>

              <p className="text-xs text-gray-400 mt-2">
                Enhanced withdrawal monitoring.
              </p>
            </div>

          </div>

          {/* Notice */}
          <div className="mt-10 bg-rose-500/10 border border-rose-500/20 rounded-2xl p-5 text-left">

            <h3 className="font-semibold text-rose-300 mb-2">
              Important Notice
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              Withdrawals will not be available through the web
              application. Once launched, customers must visit an
              authorized Bankify ATM room and authenticate their
              identity before cash can be withdrawn.
            </p>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">

            <button
              onClick={() => navigate("/my-account")}
              className="px-8 py-4 rounded-2xl bg-rose-500 hover:bg-rose-600 transition font-medium shadow-lg shadow-rose-500/20"
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