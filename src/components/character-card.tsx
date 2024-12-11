import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { Character } from "@/types/character"

interface CharacterCardProps {
  character: Character
  onSelect: () => void
}

export function CharacterCard({ character, onSelect }: CharacterCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={onSelect}>
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{character.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Wand:</span> {character.wand.wood} wood,{" "}
            {character.wand.core} core, {character.wand.length} inches
          </p>
          <p>
            <span className="font-semibold">House:</span> {character.house}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

