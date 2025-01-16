import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Tech Heim"
        width={56}
        height={63}
        className="h-10"
      />
    </Link>
  );
};
