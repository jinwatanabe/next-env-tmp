"use client";

import AddMotivation from "../utils/add";

export default function Home2() {
  const handleAdd = async () => {
    await AddMotivation();
  }
  
  return (
    <div>
      <button onClick={handleAdd}>click</button>
    </div>
  )
}