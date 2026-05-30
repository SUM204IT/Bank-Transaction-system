import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/Loading";
import { useAuth } from "../hooks/useAuth";

export default function TransferMoney() {
  const navigate = useNavigate();
  const { loading, transferMoney } = useAuth();

  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleTransferClick = (e) => {
    e.preventDefault();

    if (!toAccount || !amount) {
      alert("Please fill all fields");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    setShowConfirm(true);
  };

  const confirmTransfer = async () => {
    try {
      setProcessing(true);

      const success = await transferMoney({
        toAccount,
        amount: Number(amount),
      });

      if (success) {
        alert("Transfer Successful!");

        setToAccount("");
        setAmount("");

        navigate("/my-account");
      }
    } catch (error) {
      console.log(error);
      alert("Transfer Failed");
    } finally {
      setProcessing(false);
      setShowConfirm(false);
    }
  };

  if (loading) {
    return (
      <main>
        <LoadingScreen />
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1120] text-white px-4 py-10">

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-xs">
            Banking
          </p>

          <h1 className="text-5xl font-bold mt-2">
            Transfer Money
          </h1>

          <p className="text-gray-400 mt-3">
            Send money securely to another account.
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#111827] border border-white/10 rounded-[32px] p-8">

          <form
            onSubmit={handleTransferClick}
            className="space-y-6"
          >
            <div>
              <label className="block mb-2 text-gray-300">
                Receiver Account ID
              </label>

              <input
                value={toAccount}
                onChange={(e) =>
                  setToAccount(e.target.value)
                }
                placeholder="Enter account ID"
                className="w-full bg-[#1e293b] border border-white/5 px-4 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Amount
              </label>

              <input
                type="number"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value)
                }
                placeholder="Enter amount"
                className="w-full bg-[#1e293b] border border-white/5 px-4 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex gap-4 pt-4">

              <button
                type="submit"
                className="flex-1 bg-indigo-500 hover:bg-indigo-600 py-4 rounded-2xl font-medium transition"
              >
                Transfer Money
              </button>

              <button
                type="button"
                onClick={() => navigate("/my-account")}
                className="flex-1 bg-[#1e293b] hover:bg-[#26354d] py-4 rounded-2xl font-medium transition"
              >
                Cancel
              </button>

            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 z-50">

          <div className="w-full max-w-md bg-[#111827] border border-white/10 rounded-[32px] p-8">

            <div className="text-center">

              <div className="text-6xl mb-4">
                💸
              </div>

              <h2 className="text-3xl font-bold">
                Confirm Transfer
              </h2>

              <p className="text-gray-400 mt-4">
                You are about to transfer
              </p>

              <h3 className="text-4xl font-bold text-indigo-400 mt-3">
                ₹ {Number(amount).toLocaleString()}
              </h3>

              <p className="text-gray-400 mt-4">
                To Account
              </p>

              <p className="mt-2 break-all text-sm bg-[#1e293b] rounded-xl p-3">
                {toAccount}
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <button
                onClick={() => setShowConfirm(false)}
                disabled={processing}
                className="bg-[#1e293b] hover:bg-[#26354d] py-3 rounded-2xl transition"
              >
                Cancel
              </button>

              <button
                onClick={confirmTransfer}
                disabled={processing}
                className="bg-indigo-500 hover:bg-indigo-600 py-3 rounded-2xl transition"
              >
                {processing
                  ? "Processing..."
                  : "Confirm"}
              </button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
