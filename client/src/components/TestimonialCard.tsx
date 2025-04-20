import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-yellow-400 text-2xl mr-3">★★★★★</div>
        </div>
        <p className="text-lg mb-4">{quote}</p>
        <p className="text-gray-400">{author}</p>
      </CardContent>
    </Card>
  );
}
