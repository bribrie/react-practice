// our-domain.com/news
import Link from "next/link";

export default function News() {
  return (
    <>
      <div>News Page</div>
      <ul>
        <Link href="/news/news1">
          <li>news 1</li>
        </Link>
        <Link href="/news/news2">
          <li>news 2</li>
        </Link>
      </ul>
    </>
  );
}
