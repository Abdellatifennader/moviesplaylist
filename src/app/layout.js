import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SearchArea from "@/components/SearchArea";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

  
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white">
      
        <Header/>
        <Navbar/>
        <SearchArea/>
        {children}
        
      </body>
    
    </html>
    </ClerkProvider>
   

  );
}
