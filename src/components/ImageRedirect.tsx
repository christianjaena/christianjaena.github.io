"use client";
import { redirect } from "next/navigation";
import Image from "next/image";

type ImageRedirectProps = {
  src: string;
  alt: string;
  target: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
};
export const ImageRedirect = ({
  src,
  alt,
  target,
  className,
  width,
  height,
  style
}: ImageRedirectProps) => {
  return (
    <Image
      onClick={() => redirect(target)}
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={style}
    />
  );
};

export default ImageRedirect;
