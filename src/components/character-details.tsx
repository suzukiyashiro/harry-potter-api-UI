import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import type { Character } from "@/types/character"

interface CharacterDetailsProps {
  character: Character | null
  open: boolean
  onClose: () => void
}

export function CharacterDetails({ character, open, onClose }: CharacterDetailsProps) {
  if (!character) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{character.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 md:grid-cols-2">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={character.image}
              alt={character.name}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <ScrollArea className="h-[400px] md:h-auto">
            <div className="space-y-4 pr-4">
              {character.alternate_names.length > 0 && (
                <div>
                  <h3 className="font-semibold">Alternate Names</h3>
                  <p>{character.alternate_names.join(", ")}</p>
                </div>
              )}
              <div>
                <h3 className="font-semibold">Birth Date</h3>
                <p>{character.dateOfBirth}</p>
              </div>
              <div>
                <h3 className="font-semibold">Ancestry</h3>
                <p className="capitalize">{character.ancestry}</p>
              </div>
              <div>
                <h3 className="font-semibold">House</h3>
                <p>{character.house}</p>
              </div>
              <div>
                <h3 className="font-semibold">Wand</h3>
                <p>
                  {character.wand.wood} wood, {character.wand.core} core, {character.wand.length} inches
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Patronus</h3>
                <p className="capitalize">{character.patronus}</p>
              </div>
              <div>
                <h3 className="font-semibold">Portrayed by</h3>
                <p>{character.actor}</p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}

