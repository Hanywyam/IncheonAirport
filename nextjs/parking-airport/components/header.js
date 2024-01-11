import Link from "next/link";

export default function header() {
  return (
    <div>
      <Link href="/">home</Link>
      <Link href="/pArea">실시간 주차 안내</Link>
    </div>
  );
}
