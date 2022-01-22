import { useEffect, useState } from "react";
import axios from "axios";
import PageButton from "./components/PageButton";

export default function App() {
  const [data, setData] = useState([]); //게시물 수
  const [limit, setLimit] = useState(10); //한 페이지당 보여줄 게시물 수
  const [page, setPage] = useState(1); // 현재 페이지

  const firstIdx = (page - 1) * limit; //현재 페이지 기준 첫 게시글의 인덱스
  const range = data.slice(firstIdx, firstIdx + limit);

  useEffect(() => {
    const dataFetch = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      //console.log(result.data);
      setData(result.data);
    };
    dataFetch();
  }, []);

  return (
    <>
      <ul>
        {range.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <select
        value={limit}
        onChange={({ target: { value } }) => setLimit(Number(value))}
      >
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
      </select>
      <footer>
        <PageButton
          page={page}
          setPage={setPage}
          limit={limit}
          total={data.length}
        />
      </footer>
    </>
  );
}
