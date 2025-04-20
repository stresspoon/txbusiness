import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionDivider from "@/components/SectionDivider";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SolutionBox from "@/components/SolutionBox";
import TeamMember from "@/components/TeamMember";
import FAQItem from "@/components/FAQItem";

export default function LandingPage() {
  // 더 풍부한 고객 후기 데이터
  const testimonials = [
    {
      quote: "글쓰기가 두려웠는데, 이 솔루션을 통해 매일 글을 쓰게 됐어요. 처음에는 하루 30분씩만 투자했는데, 이제는 습관이 되어 콘텐츠를 꾸준히 만들고 있습니다. 덕분에 브랜드 인지도가 크게 향상되었어요.",
      author: "김지은",
      position: "마케팅 기획자"
    },
    {
      quote: "글 하나로 팔로워가 2천 명이나 증가했어요! 제가 기존에 쓰던 글과는 완전히 다른 접근법을 배웠고, 이제는 독자들의 반응이 폭발적으로 좋아졌습니다. 이런 결과를 기대하지 못했는데 정말 놀랍네요.",
      author: "박준혁",
      position: "콘텐츠 마케터"
    },
    {
      quote: "조회수 30만이 터졌습니다. 이전에는 1만 조회수도 힘들었는데, 배운 방식대로 콘텐츠를 구성하고 이야기 구조를 바꾸니 독자들의 반응이 완전히 달라졌어요. 이제는 일관된 퀄리티로 콘텐츠를 만들 수 있게 되었습니다.",
      author: "이하은",
      position: "크리에이터"
    },
    {
      quote: "온라인에서 100명 이상을 행사로 유입시켰어요. 특별한 마케팅 비용 없이 글쓰기만으로 이런 성과를 낼 수 있다니 정말 놀랍습니다. 앞으로도 이 방식으로 비즈니스를 성장시킬 계획입니다.",
      author: "최대현",
      position: "스타트업 대표"
    },
    {
      quote: "고객 문의가 3배 증가했어요. 글쓰기 방식을 바꾸고 챗봇을 활용하니 고객들이 더 쉽게 저희 서비스에 관심을 갖게 되었습니다. 투자 대비 효과가 정말 뛰어났습니다.",
      author: "장미영",
      position: "서비스 기획자"
    }
  ];

  return (
    <div className="min-h-screen bg-[#131313] text-white">
      {/* Hero Section - 이미지 배경 */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#131313] z-10"></div>
        <img 
          src="https://ifh.cc/g/Op3vy5.jpg" 
          alt="수익 증명 배경" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              여기 글쓰기로 1억을<br />버는 사람들이 있습니다.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-200 mb-10">
              글쓰기를 통한 수 천 만원의 계약 건들<br />(과연 이런 수익 창출이 끝일까요?)
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-[#131313] font-bold px-8 py-6 text-xl">
              <a href="https://txbusiness.kr">지금 문의하기</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* 실적 증명 섹션 */}
      <section className="px-4 py-20 mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">글쓰기를 통한 수천만원의 계약 건들</h2>
          <p className="text-xl text-gray-300">실제 성과를 확인하세요</p>
        </div>
        
        <div className="flex justify-center">
          <img src="https://ifh.cc/g/Op3vy5.jpg" alt="수익 증명 스크린샷" className="w-full max-w-4xl h-auto rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Section Divider - 더 강력한 분위기 */}
      <div className="relative">
        <SectionDivider icon="✨" />
        <motion.div 
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-white/80 to-purple-500" 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Story Section - 그 뿐만이 아닙니다 */}
      <section className="px-4 py-20 mx-auto max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-8 text-center">그뿐만이 아닙니다.</h2>
        <p className="text-2xl mb-12 text-center">스케일이 다른 협업 요청:<br />메타 초대, 챗GPT 브랜드 런칭, 대기업 협업</p>
        <div className="mb-16">
          <img src="https://ifh.cc/g/ZKoVCW.jpg" alt="대형 브랜드 협업 이미지" className="w-full max-w-4xl h-auto mx-auto rounded-xl shadow-lg" />
        </div>
        <p className="text-2xl mb-12 text-center">100명 규모 오프라인 행사 개최</p>
        <div className="mb-16">
          <img src="https://ifh.cc/g/zLlBWR.jpg" alt="오프라인 행사 이미지" className="w-full max-w-4xl h-auto mx-auto rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Section Divider - 더 강력한 분위기 */}
      <div className="relative">
        <SectionDivider icon="📊" />
        <motion.div 
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-white/80 to-blue-500" 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Business Impact Section */}
      <section className="px-4 py-20 mx-auto max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-8 text-center">비즈니스 임팩트 & 데이터 기반 증명</h2>
        <p className="text-2xl mb-12 text-center">2000명 이상의 고객 데이터 확보</p>
        <div className="mb-16">
          <img src="https://ifh.cc/g/gC5r8k.jpg" alt="고객 데이터 통계" className="w-full max-w-4xl h-auto mx-auto rounded-xl shadow-lg" />
        </div>
        <p className="text-2xl mb-12 text-center">브랜드 채널 500명 이상 유입</p>
        <div className="mb-16">
          <img src="https://ifh.cc/g/92SZdO.jpg" alt="브랜드 채널 유입 통계" className="w-full max-w-4xl h-auto mx-auto rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Section Divider - 더 강력한 분위기 */}
      <div className="relative">
        <SectionDivider icon="🚀" />
        <motion.div 
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 via-white/80 to-yellow-500" 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Branding Results Section */}
      <section className="px-4 py-20 mx-auto max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-12 text-center">브랜딩 결과</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">SNS 팔로워</h3>
            <p className="text-5xl font-black mb-2 text-yellow-400">8개월만에<br />2만 명 돌파</p>
          </div>
          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">콘텐츠 효과</h3>
            <p className="text-5xl font-black mb-2 text-yellow-400">단 1개로<br />조회수 34만</p>
          </div>
        </div>
        <div className="mb-16">
          <img src="https://ifh.cc/g/Sw3mTO.jpg" alt="콘텐츠 성과 통계" className="w-full max-w-4xl h-auto mx-auto rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Section Divider - 더 강력한 분위기 */}
      <div className="relative">
        <SectionDivider icon="💡" />
        <motion.div 
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-white/80 to-green-500" 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Emotional Hook Section */}
      <section className="px-4 py-20 mx-auto max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-4 text-center">이 모든 것들이, 글쓰기를 통해 시작되었습니다.</h2>
        <p className="text-2xl text-center mb-12">(1년도 안돼서 말이죠.)</p>
        <div className="mb-16">
          <img src="https://ifh.cc/g/8ty3Hz.jpg" alt="글쓰기 결과물" className="w-full max-w-4xl h-auto mx-auto rounded-xl shadow-lg" />
        </div>
        <div className="text-center mb-16">
          <p className="text-3xl font-bold">이런 결과물, 당신도 만들고 싶지 않으신가요?</p>
        </div>
      </section>

      {/* Section Divider - 더 강력한 분위기 */}
      <div className="relative">
        <SectionDivider icon="🔥" />
        <motion.div 
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-white/80 to-red-500" 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Solution Section - 가로 4개 솔루션 */}
      <section className="px-4 py-20 mx-auto max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-16 text-center">솔루션 구성</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Solution 1 */}
          <SolutionBox 
            title="기본형 챗봇"
            price="0원"
            features={[
              { text: "YLZ 두뇌 V1 제공" },
              { text: "기본형 챗봇 사용 가능" },
              { text: "가격: 0원" }
            ]}
            ctaText="신청하기"
          />
          
          {/* Solution 2 - 인기 상품으로 표시 */}
          <SolutionBox 
            title="업그레이드 챗봇"
            price="99만 원"
            discount="(199만 → 50% 할인 중!)"
            features={[
              { text: "브랜드 인터뷰 & 진단" },
              { text: "비즈니스 맞춤 AI 설계" },
              { text: "맞춤형 콘텐츠 챗봇 제작" },
              { text: "고급 콘텐츠 최적화 기능" },
              { text: "사용 메뉴얼 제공" }
            ]}
            ctaText="신청하기"
            isRecommended={true}
          />
          
          {/* Solution 3 */}
          <SolutionBox 
            title="교육 / 컨설팅"
            price="199만 원"
            features={[
              { text: "1:1 브랜드 인터뷰" },
              { text: "전략 수립 컨설팅" },
              { text: "업그레이드 챗봇 포함" },
              { text: "AI 활용법 & 챗봇 운영법 교육" }
            ]}
            ctaText="신청하기"
          />
          
          {/* Solution 4 */}
          <SolutionBox 
            title="대행 서비스"
            price="별도 협의"
            features={[
              { text: "브랜드 콘텐츠 운영 전체 위탁" },
              { text: "개인/기업 맞춤 커스터마이징" }
            ]}
            ctaText="상담 요청하기"
          />
        </div>
      </section>

      {/* Section Divider - 더 강력한 분위기 */}
      <div className="relative">
        <SectionDivider icon="💬" />
        <motion.div 
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-white/80 to-purple-500" 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Testimonials Section - 자동 이동 캐러셀 */}
      <section className="px-4 py-20 mx-auto max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-16 text-center">고객 후기</h2>
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* Section Divider - 더 강력한 분위기 */}
      <div className="relative">
        <SectionDivider icon="👥" />
        <motion.div 
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-white/80 to-blue-500" 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Team Section */}
      <section className="px-4 py-20 mx-auto max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-16 text-center">만든 사람들</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-3xl mx-auto">
          <TeamMember 
            name="김대영"
            emoji="👨‍💼"
            positions={[
              "YLZ 미디어 대표",
              "누적 콘텐츠 조회수 4억",
              "글로벌 브랜드 앰버서더"
            ]}
          />
          
          <TeamMember 
            name="민수"
            emoji="👨‍💻"
            positions={[
              "AIXLIFE 대표",
              "『Midjourney 올인원 가이드북』 저자",
              "전 AI코리아 커뮤니티 그룹장"
            ]}
          />
        </div>
      </section>

      {/* Section Divider - 더 강력한 분위기 */}
      <div className="relative">
        <SectionDivider icon="❓" />
        <motion.div 
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 via-white/80 to-yellow-500" 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>

      {/* FAQ Section */}
      <section className="px-4 py-20 mx-auto max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-16 text-center">자주 묻는 질문 (FAQ)</h2>
        
        <div className="space-y-8 mb-16 max-w-3xl mx-auto bg-white/5 p-8 rounded-xl border border-white/10">
          <FAQItem 
            question="Q. 글쓰기 경험이 없어도 되나요?"
            answer="A. 전혀 상관없습니다. 초보자도 실습하며 실력을 빠르게 쌓을 수 있습니다."
          />
          
          <FAQItem 
            question="Q. AI 챗봇을 잘 몰라도 괜찮나요?"
            answer="A. 모든 챗봇은 매뉴얼과 함께 제공되며, 교육도 포함되어 있어 처음이어도 문제 없습니다."
          />
          
          <FAQItem 
            question="Q. 수익화까지 얼마나 걸릴까요?"
            answer="A. 빠르면 2~3주 안에 콘텐츠 반응이 오고, 수익화도 그 뒤를 따릅니다."
            isLast={true}
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.section 
        className="px-4 py-24 mx-auto max-w-screen-md text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-black mb-12">이제, 당신 차례입니다.</h2>
        <Button asChild className="bg-white hover:bg-gray-200 text-[#131313] font-bold px-10 py-8 text-2xl">
          <a href="https://txbusiness.kr">지금 시작하기</a>
        </Button>
      </motion.section>

      {/* Footer */}
      <footer className="px-4 py-12 mt-12 border-t border-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <p className="text-gray-400 text-sm">&copy; 2023 YLZ 미디어 & AIXLIFE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
