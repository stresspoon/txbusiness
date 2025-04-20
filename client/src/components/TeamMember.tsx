import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  emoji: string;
  positions: string[];
}

export default function TeamMember({ name, emoji, positions }: TeamMemberProps) {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-gray-700 mb-4 flex items-center justify-center">
          <span className="text-3xl">{emoji}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        {positions.map((position, index) => (
          <p key={index} className="text-gray-300 mb-1">{position}</p>
        ))}
      </CardContent>
    </Card>
  );
}
