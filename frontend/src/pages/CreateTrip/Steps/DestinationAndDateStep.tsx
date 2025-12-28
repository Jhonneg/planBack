import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import Button from "../../../components/Button";
import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  eventStartAndEndDates: DateRange | undefined;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
  setDestination: (destination: string) => void;
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
}

export default function DestinationAndDateStep({
  isGuestInputOpen,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  eventStartAndEndDates,
  setEventStartAndEndDates,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    return setIsDatePickerOpen(true);
  }
  function closeDatePicker() {
    return setIsDatePickerOpen(false);
  }

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d' de 'LLL")
          .concat(" até ")
          .concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
      : null;

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          placeholder="Para onder você vai"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>
      <button
        onClick={openDatePicker}
        disabled={isGuestInputOpen}
        className="flex items-center gap-2 text-left w-[240px]"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 flex-1">
          {displayedDate || "Quando ?"}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button type="button" onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>

            <DayPicker
              required
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
              classNames={{
                range_start: "bg-lime-300 text-zinc-800",
                range_middle: "bg-lime-300 text-zinc-800",
                range_end: "bg-lime-300 text-zinc-800",
                selected: "bg-lime-300 text-zinc-800",
              }}
            />
          </div>
        </div>
      )}
      <div className="w-px h-6 bg-zinc-800" />

      {isGuestInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} variant="primary">
          {" "}
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
