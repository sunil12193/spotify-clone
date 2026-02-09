import "./globals.css";
import Header from "@/component/header";
import LeftSidebar from "@/component/leftSidebar";
import RightSidebar from "@/component/rightSidebar";
import Footer from "@/component/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen fixed inset-0">
        <Header />

        <div className="ml-6 mr-6 mt-22 grid grid-cols-[300px_1fr_300px] gap-2 ">
          {/* <div className="fixed rounded-lg p-2 rounded-l-lg bg-[#121212] "> */}
            <LeftSidebar />
          {/* </div> */}

          <main className="w-full rounded-lg h-[698px] overflow-y-auto">
            {children}
          </main>

          <RightSidebar />
        </div>
        <Footer />
      </body>
    </html>
  );
}
