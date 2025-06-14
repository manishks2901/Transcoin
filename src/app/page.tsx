import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-12">
      <div className="bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 rounded-3xl shadow-2xl p-12 max-w-lg w-full flex flex-col items-center border border-blue-800/40">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/file.svg" alt="PYUSD Logo" width={48} height={48} className="drop-shadow-xl" />
          <span className="text-3xl font-bold text-blue-400 tracking-tight">PYUSD</span>
        </div>
        <h1 className="text-5xl font-extrabold mb-4 text-blue-200 drop-shadow-lg text-center">Transaction Made Simple</h1>
        <p className="text-lg mb-8 text-gray-300 text-center max-w-xs">Experience seamless, secure, and lightning-fast payments and transfers with <span className="font-bold text-blue-400">PYUSD</span> on Solana. Your digital wallet, your freedom.</p>
        <div className="w-full flex justify-center">
          <div className="w-auto">
            {/* WalletMultiButton will be rendered in the header for consistency */}
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-400 text-center">
          <span className="inline-block bg-blue-900/40 px-3 py-1 rounded-full font-mono tracking-wide">Powered by Solana</span>
        </div>
      </div>
    </div>
  );
}
