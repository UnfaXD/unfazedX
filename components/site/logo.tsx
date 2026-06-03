import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-sans text-base font-bold tracking-tight",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="bg-lime text-lime-foreground inline-flex size-7 items-center justify-center rounded-md font-extrabold"
      >
        U
      </span>
      <span>
        unfazed
        <span className="text-lime">X</span>
      </span>
    </span>
  );
}
