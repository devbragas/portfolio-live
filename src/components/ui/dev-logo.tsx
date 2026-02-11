import Image from "next/image";

export function DevLogo() {
  return (
    <>
      <div className="flex items-center">
        <Image
          src="/logo.png"
          width={70}
          height={70}
          alt="Enzo Braga Dev Logo"
        />
        <p>
          <span className="text-(--tertiary-text)">dev</span>
          <span className="font-bold text-(--secondary-text)">bragas</span>
        </p>
      </div>
    </>
  );
}
