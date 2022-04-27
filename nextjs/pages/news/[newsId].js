// our-domain.com/news/detail
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const newsId = router.query.newsId;

  // Send a request to the backend API
  // to fetch the news item with newsId.

  return (
    <>
      <div>Id</div>
    </>
  );
}
