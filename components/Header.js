import Link from "next/link";

export default function Header() {
  return (
    <nav className="p-4 bg-gray-900 text-white">
      <Link href="/" className="mr-4">Home</Link>
      <Link href="/designs" className="mr-4">Pick a Design</Link>
      <Link href="/selected">Selected Design</Link>
    </nav>
  );
}
