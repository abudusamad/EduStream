import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToastPovider } from "@/components/providers/toast-provider";
import { siteConfig } from "@/config/site";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: "%s | " + siteConfig.name,
	},
	description: siteConfig.description,
	keywords: ["Access", "Learning", "Center"],
	icons: [
		{
			url: "/logo.svg",
			href: "/logo.svg",
		},
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
			<Head>
				<title>{metadata.title?.default}</title>
				<link rel="icon" href="/favicon.ico" />

				<meta name="keywords" content={metadata.keywords} />
			</Head>
				<body className={cn(inter.className,"dark:bg-black")}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
						storageKey="theme-preference"
					>
						<ConfettiProvider />
						<ToastPovider />
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
