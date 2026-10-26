import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Quizmaker",description:"Upload quiz material and turn it into an interactive timed practice test."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
