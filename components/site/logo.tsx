import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-sans text-base font-bold tracking-tight",
        className,
      )}
    >
      <Image
        src="/projects/logosvg.png"
        alt="UnfazedX logo"
        width={28}
        height={28}
        priority
        className="size-7 object-contain"
      />
      <span>
        unfazed
        <span className="text-lime">X</span>
      </span>
    </span>
  );
}
