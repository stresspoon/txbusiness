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
      {/* Hero Section - 우주 배경 */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#131313] z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
          alt="우주 배경" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* 별똥별 효과 */}
        <div className="absolute inset-0 z-10 opacity-70">
          <motion.div 
            className="absolute w-1 h-20 bg-gradient-to-b from-transparent via-white to-transparent"
            initial={{ top: "-10%", left: "10%", rotate: 15 }}
            animate={{ top: "120%", left: "5%" }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatDelay: 7,
              ease: "easeIn"
            }}
          />
          <motion.div 
            className="absolute w-1 h-32 bg-gradient-to-b from-transparent via-white to-transparent"
            initial={{ top: "-10%", left: "35%", rotate: 15 }}
            animate={{ top: "120%", left: "30%" }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              repeatDelay: 4,
              ease: "easeIn",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute w-1 h-24 bg-gradient-to-b from-transparent via-white to-transparent"
            initial={{ top: "-10%", left: "75%", rotate: 15 }}
            animate={{ top: "120%", left: "70%" }}
            transition={{ 
              duration: 3.2, 
              repeat: Infinity, 
              repeatDelay: 5,
              ease: "easeIn",
              delay: 1
            }}
          />
        </div>
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 text-white drop-shadow-lg">
              여기 글쓰기로 1억을<br />버는 사람들이 있습니다.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 mb-8 sm:mb-10 drop-shadow-md">
              글쓰기를 통한 수 천 만원의 계약 건들<br />(과연 이런 수익 창출이 끝일까요?)
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-[#131313] font-bold px-8 py-6 text-xl">
              <a href="https://txbusiness.kr">지금 문의하기</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* 성과 하이라이트 그리드 - 4개 이미지 1:1 비율 */}
      <section className="px-4 py-12 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 이미지 1: 글쓰기를 통한 수천만원의 계약 건들 */}
          <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
            <div className="relative pb-[100%]"> {/* 1:1 비율 유지 */}
              <img 
                src="https://ifh.cc/g/Rg4LgK.jpg" 
                alt="글쓰기를 통한 수천만원의 계약 건들" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-center">글쓰기를 통한 수천만원의 계약 건들</h3>
            </div>
          </div>

          {/* 이미지 2: 100명 대규모 오프라인 행사 */}
          <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
            <div className="relative pb-[100%]"> {/* 1:1 비율 유지 */}
              <img 
                src="https://ifh.cc/g/zLlBWR.jpg" 
                alt="100명 대규모 오프라인 행사" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-center">100명 대규모 오프라인 행사</h3>
            </div>
          </div>

          {/* 이미지 3: 8개월만에 2만명 돌파 */}
          <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
            <div className="relative pb-[100%]"> {/* 1:1 비율 유지 */}
              <img 
                src="https://ifh.cc/g/Sw3mTO.jpg" 
                alt="8개월만에 2만명 돌파" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-center">8개월만에 2만명 돌파</h3>
            </div>
          </div>

          {/* 이미지 4: ChatGPT 샘알트만 신규 브랜드 협업 */}
          <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
            <div className="relative pb-[100%]"> {/* 1:1 비율 유지 */}
              <img 
                src="https://ifh.cc/g/yVXK80.jpg" 
                alt="ChatGPT 샘알트만 신규 브랜드 협업" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-center">ChatGPT 샘알트만 신규 브랜드 협업</h3>
            </div>
          </div>
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

      {/* Emotional Hook Section */}
      <section className="px-4 py-20 mx-auto max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-4 text-center">이 모든 것들이, 글쓰기를 통해 시작되었습니다.</h2>
        <p className="text-2xl text-center mb-8">(1년도 안되서 말이죠.)</p>
        <div className="mb-12 max-w-2xl mx-auto">
          <img src="https://ifh.cc/g/8ty3Hz.jpg" alt="글쓰기 결과물" className="w-full h-auto rounded-xl shadow-lg" />
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

      {/* Testimonials Section - 가로 4개 후기 */}
      <section className="px-4 py-20 mx-auto max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-16 text-center">고객 후기</h2>
        
        {/* 국내 마케팅 분야 1위 등 이미지 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* 이미지 1: 국내 마케팅 분야 1위 콘텐츠 채널 공동 운영 제안 */}
          <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 group transition duration-300">
            <div className="relative pb-[100%]"> {/* 1:1 비율 유지 */}
              <img 
                src="https://ifh.cc/g/WpopSd.jpg" 
                alt="국내 마케팅 분야 1위 콘텐츠 채널 공동 운영 제안" 
                className="absolute inset-0 w-full h-full object-cover transition duration-300 transform group-hover:scale-150"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-center">국내 마케팅 분야 1위 콘텐츠 채널 공동 운영 제안</h3>
            </div>
          </div>

          {/* 이미지 2: 대기업 공간 무료 활용 제안 */}
          <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 group transition duration-300">
            <div className="relative pb-[100%]"> {/* 1:1 비율 유지 */}
              <img 
                src="https://ifh.cc/g/PltFjD.jpg" 
                alt="대기업 공간 무료 활용 제안" 
                className="absolute inset-0 w-full h-full object-cover transition duration-300 transform group-hover:scale-150"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-center">대기업 공간 무료 활용 제안</h3>
            </div>
          </div>

          {/* 이미지 3: 2000명 이상의 고객 데이터 확보 */}
          <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 group transition duration-300">
            <div className="relative pb-[100%]"> {/* 1:1 비율 유지 */}
              <img 
                src="https://ifh.cc/g/RROO6k.jpg" 
                alt="2000명 이상의 고객 데이터 확보" 
                className="absolute inset-0 w-full h-full object-cover transition duration-300 transform group-hover:scale-150"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-center">2000명 이상의 고객 데이터 확보</h3>
            </div>
          </div>

          {/* 이미지 4: 브랜드 채널 500명 이상 유입 */}
          <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 group transition duration-300">
            <div className="relative pb-[100%]"> {/* 1:1 비율 유지 */}
              <img 
                src="https://ifh.cc/g/XcLNf2.jpg" 
                alt="브랜드 채널 500명 이상 유입" 
                className="absolute inset-0 w-full h-full object-cover transition duration-300 transform group-hover:scale-150"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-center">브랜드 채널 500명 이상 유입</h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <div key={index} className="bg-white/5 rounded-xl border border-white/10 p-6 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-300 italic mb-4 flex-grow">{testimonial.quote.length > 120 ? testimonial.quote.substring(0, 120) + '...' : testimonial.quote}</p>
              <div className="border-t border-white/10 pt-4 mt-auto">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
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
            imageUrl="https://ifh.cc/g/klCwt9.jpg"
            positions={[
              "YLZ 미디어 대표",
              "누적 콘텐츠 조회수 4억",
              "글로벌 브랜드 앰버서더"
            ]}
          />
          
          <TeamMember 
            name="나민수"
            imageUrl="https://ifh.cc/g/CPFkyd.jpg"
            positions={[
              "AIXLIFE 대표",
              "AI 컨설팅 및 활용 코치",
              "스레드/인스타 2.5만 AI 인플루언서"
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
        
        <div className="space-y-4 mb-16 max-w-3xl mx-auto bg-white/5 p-8 rounded-xl border border-white/10">
          <FAQItem 
            question="Q. 글쓰기 경험이 없어도 되나요?"
            answer="A. 전혀 상관없습니다. 저희 프로그램은 모든 수준의 작가를 위해 설계되었습니다. 초보자도 실습하며 실력을 빠르게 쌓을 수 있고, 제공되는 템플릿과 가이드라인을 통해 단계별로 작성 기술을 향상시킬 수 있습니다. 많은 고객님들이 처음 시작할 때 글쓰기 경험이 거의 없었지만, 몇 주 안에 효과적인 콘텐츠를 만들어내기 시작했습니다."
          />
          
          <FAQItem 
            question="Q. AI 챗봇을 잘 몰라도 괜찮나요?"
            answer="A. 물론입니다. 모든 챗봇은 상세한 매뉴얼과 함께 제공되며, 교육 패키지에는 단계별 사용법 교육도 포함되어 있어 처음이어도 전혀 문제 없습니다. 기술적 지식이 없어도 챗봇 인터페이스는 직관적으로 설계되어 있어 쉽게 적응하실 수 있습니다. 또한 첫 한 달간은 기술 지원을 통해 어려움이 있으시면 언제든지 도움을 요청하실 수 있습니다."
          />
          
          <FAQItem 
            question="Q. 수익화까지 얼마나 걸릴까요?"
            answer="A. 빠르면 2~3주 안에 콘텐츠 반응이 오기 시작하고, 수익화도 그 뒤를 따릅니다. 물론 이는 콘텐츠 품질, 일관성, 그리고 타겟 시장에 따라 달라질 수 있습니다. 저희 고객 데이터에 따르면 평균적으로 3개월 이내에 유의미한 수익이 발생하기 시작했습니다. 중요한 것은 꾸준함입니다. 주기적으로 콘텐츠를 발행하고 점차 개선해 나가는 것이 성공의 핵심입니다."
          />
          
          <FAQItem 
            question="Q. 어떤 종류의 비즈니스에 효과적인가요?"
            answer="A. 저희 솔루션은 다양한 산업 분야에 적용 가능합니다. B2B 컨설팅, 온라인 코칭, 이커머스, 콘텐츠 크리에이터, 서비스 기반 비즈니스 등 여러 분야에서 성공 사례가 있습니다. 각 비즈니스의 특성에 맞게 AI 챗봇과 콘텐츠 전략이 맞춤 설계되므로, 어떤 분야에서든 효과를 볼 수 있습니다. 다만, 디지털 마케팅과 온라인 비즈니스를 영위하는 기업이나 개인에게 특히 효과적입니다."
          />
          
          <FAQItem 
            question="Q. 얼마나 많은 시간을 투자해야 하나요?"
            answer="A. 초기에는 주당 3-5시간 정도의 투자가 권장됩니다. 브랜드 인터뷰와 전략 수립 단계에서는 조금 더 많은 시간이 필요할 수 있지만, 시스템이 구축된 후에는 주당 2-3시간 정도로 효과적인 관리가 가능합니다. 물론 더 많은 시간을 투자할수록 결과가 더 빨리 나타날 수 있습니다. 대행 서비스를 선택하시면 시간 투자를 최소화하면서도 전문적인 결과물을 얻으실 수 있습니다."
          />
          
          <FAQItem 
            question="Q. 결제 후 얼마나 빨리 시작할 수 있나요?"
            answer="A. 결제 완료 후 24시간 이내에 시작 안내와 함께 초기 설정을 도와드립니다. 기본형 챗봇은 즉시 사용 가능하며, 업그레이드 챗봇과 컨설팅 패키지는 일정 조율 후 3-5일 이내에 첫 세션이 진행됩니다. 전체 셋업은 보통 1-2주 내에 완료되어 본격적인 활용이 가능해집니다."
          />
          
          <FAQItem 
            question="Q. 환불 정책은 어떻게 되나요?"
            answer="A. 서비스 시작 후 7일 이내에 요청하시면 100% 환불이 가능합니다(단, 맞춤 제작된 챗봇이나 컨설팅 세션이 시작된 경우 제외). 7일 이후 30일까지는 사용하지 않은 서비스에 대해 50% 환불이 가능합니다. 자세한 환불 정책은 계약서에 명시되어 있으며, 특별한 상황의 경우 개별적으로 상담해 드립니다."
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
          <a href="https://txbusiness.kr">지금 문의하기</a>
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
