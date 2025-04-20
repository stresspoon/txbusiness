import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SolutionFeature {
  icon: string;
  text: string;
}

interface SolutionBoxProps {
  title: string;
  price: string;
  discount?: string;
  features: SolutionFeature[];
  ctaText: string;
}

export default function SolutionBox({ 
  title, 
  price, 
  discount, 
  features, 
  ctaText 
}: SolutionBoxProps) {
  return (
    <Card className="bg-white/5 border-white/10 h-full flex flex-col">
      <CardContent className="flex-grow p-6 pb-2">
        <h3 className="text-xl font-bold mb-4">{title} – {price} {
          discount && <span className="text-yellow-400">{discount}</span>
        }</h3>
        <ul className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={`${feature.icon === '💡' ? 'text-yellow-400' : 'text-green-400'} mr-2`}>
                {feature.icon}
              </span>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-2 mt-auto">
        <Button asChild className="w-full bg-white hover:bg-gray-200 text-[#131313] font-bold">
          <a href="https://txbusiness.kr">{ctaText}</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
