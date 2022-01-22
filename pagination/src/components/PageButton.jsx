import React from "react";

export default function PageButton({ page, setPage, total, limit }) {
  const pageNums = Math.ceil(total / limit);

  return (
    <>
      <nav>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </button>
        {Array(pageNums)
          .fill()
          .map((_, idx) => (
            <button key={idx + 1} onClick={() => setPage(idx + 1)}>
              {idx + 1}
            </button>
          ))}
        <button onClick={() => setPage(page + 1)} disabled={page === pageNums}>
          &gt;
        </button>
      </nav>
    </>
  );
}
