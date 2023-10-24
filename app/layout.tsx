import { ToastProvider } from "@/components/providers/toaster-provider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/providers/toaster-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
<<<<<<< HEAD
					<ToastProvider />
=======
					<ToastProvider/>
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
