import { Separator } from "@/components/ui/separator";

interface FAQItemProps {
  question: string;
  answer: string;
  isLast?: boolean;
}

export default function FAQItem({ question, answer, isLast = false }: FAQItemProps) {
  return (
    <div className="pb-4">
      <h3 className="text-xl font-bold mb-2">{question}</h3>
      <p className="text-gray-300">{answer}</p>
      {!isLast && <Separator className="mt-4 bg-white/10" />}
    </div>
  );
}
