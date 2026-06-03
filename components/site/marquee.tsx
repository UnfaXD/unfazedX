import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  speed = "normal",
  reverse = false,
  separator = "•",
}: {
  items: readonly string[];
  className?: string;
  speed?: "slow" | "normal";
  reverse?: boolean;
  separator?: string;
}) {
  const animationClass = reverse
    ? "animate-marquee-reverse"
    : speed === "slow"
      ? "animate-marquee-slow"
      : "animate-marquee";

  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]",
        className,
      )}
      aria-hidden="true"
    >
      <div className={cn("flex shrink-0 items-center pr-6", animationClass)}>
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center pr-6">
            {item}
            <span className="text-lime pl-6">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
