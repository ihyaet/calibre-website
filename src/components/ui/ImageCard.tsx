import { cn } from "@/lib/utils";
import Image from "next/image";
import { type ReactNode } from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  violetBorder?: boolean;
  caption?: ReactNode;
  className?: string;
  priority?: boolean;
  placeholder?: boolean;
}

export function ImageCard({
  src,
  alt,
  width = 800,
  height = 600,
  violetBorder = false,
  caption,
  className,
  priority = false,
  placeholder = false,
}: ImageCardProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden",
        violetBorder && "ring-1 ring-violet-border",
        className
      )}
    >
      {placeholder ? (
        <div
          className="w-full h-full min-h-[320px] flex items-center justify-center bg-plum-elev"
          aria-label={alt}
        >
          <span className="font-mono text-[length:var(--text-label)] text-mute-plum tracking-widest uppercase">
            {alt}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-full object-cover"
        />
      )}
      {caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
