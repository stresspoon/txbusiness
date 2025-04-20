import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionDivider from "@/components/SectionDivider";
import TestimonialCard from "@/components/TestimonialCard";
import SolutionBox from "@/components/SolutionBox";
import TeamMember from "@/components/TeamMember";
import FAQItem from "@/components/FAQItem";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#131313] text-white">
      {/* Header Section */}
      <motion.header 
        className="px-4 py-8 mx-auto max-w-screen-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tight mb-3">여기 글쓰기로 1억을 버는 사람들이 있습니다.</h1>
          <p className="text-xl font-medium text-gray-300 mb-8">글쓰기를 통한 수 천 만원의 계약 건들 (과연 이런 수익 창출이 끝일까요?)</p>
        </div>
        <div className="mb-8">
          <img src="https://ifh.cc/g/Op3vy5.jpg" alt="수익 증명 스크린샷" className="w-full h-auto rounded-xl shadow-lg" />
        </div>
      </motion.header>

      {/* Section Divider */}
      <SectionDivider icon="✨" />

      {/* Story Section 1 */}
      <section className="px-4 py-8 mx-auto max-w-screen-md">
        <h2 className="text-3xl font-bold mb-6 text-center">그뿐만이 아닙니다.</h2>
        <p className="text-xl mb-6 text-center">스케일이 다른 협업 요청: 메타 초대, 챗GPT 브랜드 런칭, 대기업 협업</p>
        <div className="mb-8">
          <img src="https://ifh.cc/g/ZKoVCW.jpg" alt="대형 브랜드 협업 이미지" className="w-full h-auto rounded-xl shadow-lg" />
        </div>
        <p className="text-xl mb-6 text-center">100명 규모 오프라인 행사 개최</p>
        <div className="mb-8">
          <img src="https://ifh.cc/g/zLlBWR.jpg" alt="오프라인 행사 이미지" className="w-full h-auto rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider icon="📊" />

      {/* Business Impact Section */}
      <section className="px-4 py-8 mx-auto max-w-screen-md">
        <h2 className="text-3xl font-bold mb-6 text-center">비즈니스 임팩트 & 데이터 기반 증명</h2>
        <p className="text-xl mb-6 text-center">2000명 이상의 고객 데이터 확보</p>
        <div className="mb-8">
          <img src="https://ifh.cc/g/gC5r8k.jpg" alt="고객 데이터 통계" className="w-full h-auto rounded-xl shadow-lg" />
        </div>
        <p className="text-xl mb-6 text-center">브랜드 채널 500명 이상 유입</p>
        <div className="mb-8">
          <img src="https://ifh.cc/g/92SZdO.jpg" alt="브랜드 채널 유입 통계" className="w-full h-auto rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider icon="🚀" />

      {/* Branding Results Section */}
      <section className="px-4 py-8 mx-auto max-w-screen-md">
        <h2 className="text-3xl font-bold mb-6 text-center">브랜딩 결과</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">SNS 팔로워</h3>
            <p className="text-3xl font-black mb-2">8개월만에 2만 명 돌파</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">콘텐츠 효과</h3>
            <p className="text-3xl font-black mb-2">단 1개로 조회수 34만</p>
          </div>
        </div>
        <div className="mb-8">
          <img src="https://ifh.cc/g/Sw3mTO.jpg" alt="콘텐츠 성과 통계" className="w-full h-auto rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider icon="💡" />

      {/* Emotional Hook Section */}
      <section className="px-4 py-8 mx-auto max-w-screen-md">
        <h2 className="text-3xl font-bold mb-6 text-center">이 모든 것들이, 글쓰기를 통해 시작되었습니다.</h2>
        <p className="text-xl text-center mb-6">(1년도 안돼서 말이죠.)</p>
        <div className="mb-8">
          <img src="https://ifh.cc/g/8ty3Hz.jpg" alt="글쓰기 결과물" className="w-full h-auto rounded-xl shadow-lg" />
        </div>
        <div className="text-center mb-10">
          <p className="text-2xl font-bold">이런 결과물, 당신도 만들고 싶지 않으신가요?</p>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider icon="🔥" />

      {/* Solution Section */}
      <section className="px-4 py-8 mx-auto max-w-screen-md">
        <h2 className="text-3xl font-bold mb-10 text-center">솔루션 구성</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Solution 1 */}
          <SolutionBox 
            title="✔ 기본형 챗봇"
            price="0원"
            features={[
              { icon: "✅", text: "YLZ 두뇌 V1 제공" },
              { icon: "✅", text: "기본형 챗봇 사용 가능" },
              { icon: "💡", text: "가격: 0원" }
            ]}
            ctaText="신청하기"
          />
          
          {/* Solution 2 */}
          <SolutionBox 
            title="✔ 업그레이드 챗봇"
            price="99만 원"
            discount="(199만 → 50% 할인 중!)"
            features={[
              { icon: "✅", text: "브랜드 인터뷰 & 진단" },
              { icon: "✅", text: "비즈니스 맞춤 AI 설계" },
              { icon: "✅", text: "맞춤형 콘텐츠 챗봇 제작" },
              { icon: "✅", text: "고급 콘텐츠 최적화 기능" },
              { icon: "✅", text: "사용 메뉴얼 제공" }
            ]}
            ctaText="신청하기"
          />
          
          {/* Solution 3 */}
          <SolutionBox 
            title="✔ 교육 / 컨설팅"
            price="199만 원"
            features={[
              { icon: "✅", text: "1:1 브랜드 인터뷰" },
              { icon: "✅", text: "전략 수립 컨설팅" },
              { icon: "✅", text: "업그레이드 챗봇 포함" },
              { icon: "✅", text: "AI 활용법 & 챗봇 운영법 교육" }
            ]}
            ctaText="신청하기"
          />
          
          {/* Solution 4 */}
          <SolutionBox 
            title="✔ 대행 서비스"
            price="별도 협의"
            features={[
              { icon: "✅", text: "브랜드 콘텐츠 운영 전체 위탁" },
              { icon: "✅", text: "개인/기업 맞춤 커스터마이징" }
            ]}
            ctaText="상담 요청하기"
          />
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider icon="💬" />

      {/* Testimonials Section */}
      <section className="px-4 py-8 mx-auto max-w-screen-md">
        <h2 className="text-3xl font-bold mb-10 text-center">고객 후기</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <TestimonialCard 
            quote='"매일 글을 쓰게 됐어요"'
            author="기획자 A님"
          />
          
          <TestimonialCard 
            quote='"글 하나로 팔로워 2천 명 증가했어요"'
            author="마케터 B님"
          />
          
          <TestimonialCard 
            quote='"조회수 30만이 터졌습니다"'
            author="인플루언서 C님"
          />
          
          <TestimonialCard 
            quote='"100명 이상을 행사로 유입시켰어요"'
            author="스타트업 D님"
          />
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider icon="👥" />

      {/* Team Section */}
      <section className="px-4 py-8 mx-auto max-w-screen-md">
        <h2 className="text-3xl font-bold mb-10 text-center">만든 사람들</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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

      {/* Section Divider */}
      <SectionDivider icon="❓" />

      {/* FAQ Section */}
      <section className="px-4 py-8 mx-auto max-w-screen-md">
        <h2 className="text-3xl font-bold mb-10 text-center">자주 묻는 질문 (FAQ)</h2>
        
        <div className="space-y-4 mb-12">
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
        className="px-4 py-12 mx-auto max-w-screen-md text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-black mb-10">이제, 당신 차례입니다.</h2>
        <Button asChild className="bg-white hover:bg-gray-200 text-[#131313] font-bold px-8 py-6 text-xl">
          <a href="https://txbusiness.kr">지금 시작하기</a>
        </Button>
      </motion.section>

      {/* Footer */}
      <footer className="px-4 py-8 mt-12 border-t border-gray-800">
        <div className="mx-auto max-w-screen-md text-center">
          <p className="text-gray-400 text-sm">&copy; 2023 YLZ 미디어 & AIXLIFE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
