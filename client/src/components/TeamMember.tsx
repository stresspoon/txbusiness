import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  name?: string;
  emoji?: string;
  positions: string[];
  imageUrl?: string;
}

export default function TeamMember({ name, emoji, positions, imageUrl }: TeamMemberProps) {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardContent className="p-6 flex flex-col items-center text-center">
        {imageUrl ? (
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img src={imageUrl} alt={name ?? "프로필"} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-700 mb-4 flex items-center justify-center">
            <span className="text-3xl">{emoji}</span>
          </div>
        )}
        {name ? <h3 className="text-xl font-bold mb-2">{name}</h3> : null}
        {positions.map((position, index) => (
          <p key={index} className="text-gray-300 mb-1">{position}</p>
        ))}
      </CardContent>
    </Card>
  );
}
