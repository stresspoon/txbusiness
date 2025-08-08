import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto max-w-screen-xl px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/image/TXB_logo.png" alt="TXB Logo" className="h-6 w-6" />
          <span className="font-bold tracking-tight">TXB</span>
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition-colors">특장점</a>
          <a href="#pricing" className="hover:text-white transition-colors">가격</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <Button asChild size="sm" className="bg-white text-[#131313] hover:bg-gray-200 font-bold">
          <a href="https://pf.kakao.com/_lxkxjXG" target="_blank" rel="noopener noreferrer">문의하기</a>
        </Button>
      </div>
    </div>
  );
}


