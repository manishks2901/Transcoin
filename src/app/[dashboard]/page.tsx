import MainContent from "@/components/maincontent";
import Sidebar from "@/components/sidebar";

const Page = () => {
  // const { connection } = useConnection()
  return (
    <div className="flex  min-h-screen bg-gray-50 gap-3 m-6 p-6 h-[80vh] w-full bg-amber-200 overflow-x-hidden overflow-y-hidden">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Page;
