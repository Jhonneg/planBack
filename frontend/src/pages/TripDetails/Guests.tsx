import { CircleDashed, UserCog } from "lucide-react";
import Button from "../../components/Button";

export default function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Matheus Blanco
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              matheub@hotmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Dra. Rita Suzuki
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              ritasu@yahoo.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>
      </div>
      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
