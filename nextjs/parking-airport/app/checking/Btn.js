"use client";

export default function Btn({ result }) {
  return (
    <>
      <button>변경</button>
      <button
        onClick={() => {
          fetch("/api/delete", {
            method: "DELETE",
            body: result._id,
          })
            .then((r) => r.json())
            .then((result) => {
              console.log(result);
            });
        }}>
        취소
      </button>
    </>
  );
}
