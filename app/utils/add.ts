export default async function AddMotivation() {
  // fetch関数を使用して手順2で作成したAPIエンドポイントにリクエストを送信
  const res = await fetch(`/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "title", time: 1 }),
  });
  const data = await res.json();
  return data;
}