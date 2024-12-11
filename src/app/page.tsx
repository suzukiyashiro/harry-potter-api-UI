"use client";
import { useState } from "react";
import { CharacterCard } from "@/components/character-card";
import { dummyCharacters } from "@/data/characters";
import { CharacterDetails } from "@/components/character-details";
import { Character } from "@/types/character";

export default function Page() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Harry Potter Characters
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onSelect={() => setSelectedCharacter(character)}
          />
        ))}
      </div>
      <CharacterDetails
        character={selectedCharacter}
        open={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
    </div>
  );
}
