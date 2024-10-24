import { headers } from "next/headers";

type StudyRecord = {
  title: string;
  time: number;
};

export default async function Home() {
  const headersData = await headers()
  const host = headersData.get('host')
  const studyRecords = await fetch(`http://${host}/api/hello`)
    .then((res) => res.json())
    .then((data) => data.studyRecords);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {studyRecords.map((record: StudyRecord, index: number) => (
        <div key={index} className="flex items-center justify-between w-full max-w-[640px] p-4 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center">
            <h2 className="ml-2 text-lg font-bold text-gray-800">{record.title}</h2>
          </div>
          <p className="text-sm text-gray-600">{record.time} minutes</p>
        </div>
      ))}
    </div>
  );
}
