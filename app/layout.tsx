import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "MV Trend Studio",
    template: "%s · MV Trend Studio",
  },
  description: "K-pop MV 트렌드 데이터를 제작 의사결정으로 연결하는 크리에이티브 인텔리전스 서비스",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <div className="min-h-screen bg-grid">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
