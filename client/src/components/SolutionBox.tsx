import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SolutionFeature {
  text: string;
}

interface SolutionBoxProps {
  title: string;
  price: string;
  discount?: string;
  features: SolutionFeature[];
  ctaText: string;
  isRecommended?: boolean;
}

export default function SolutionBox({ 
  title, 
  price, 
  discount, 
  features, 
  ctaText,
  isRecommended = false
}: SolutionBoxProps) {
  return (
    <Card className={`relative bg-white/5 border-white/10 h-full flex flex-col ${isRecommended ? 'ring-2 ring-yellow-400' : ''}`}>
      {isRecommended && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-bold px-4 py-1 rounded-full z-10">
          인기 상품
        </Badge>
      )}
      <CardContent className="flex-grow p-6 pb-2">
        <h3 className="text-xl font-bold mb-4">{title} – {price} {
          discount && <span className="text-yellow-400">{discount}</span>
        }</h3>
        <ul className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-2 mt-auto">
        <Button asChild className={`w-full text-[#131313] font-bold ${isRecommended ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-white hover:bg-gray-200'}`}>
          {title === "대행 서비스" ? (
            <a href="http://pf.kakao.com/_lxkxjXG" target="_blank" rel="noopener noreferrer">{ctaText}</a>
          ) : (title === "기본형 챗봇" ? (
            <a href="https://chatgpt.com/g/g-67f0cda3e5c8819197dcff2f5abd9e33-ylz-saeroun-dunoe-v1" target="_blank" rel="noopener noreferrer">{ctaText}</a>
          ) : (
            <a href="https://sponge-cucumber-5a6.notion.site/AI-1f1644f66e50809d88c9f8ee39353763" target="_blank" rel="noopener noreferrer">{ctaText}</a>
          ))}
        </Button>
      </CardFooter>
    </Card>
  );
}
