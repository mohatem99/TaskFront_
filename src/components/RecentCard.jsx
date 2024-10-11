export default function RecentCard() {
  return (
    <>
      <div className="relative p-3  bg-darkest text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 p-1 text-lg font-bold   dark:text-white">
          Recent Tasks
        </h5>
        <p className="font-normal  dark:text-gray-400">
          There are your recent tasks:
        </p>
        <ul className="p-1 ml-4 list-disc">
          <li>first title</li>
          <li>second title</li>
          <li>third title</li>
        </ul>
      </div>
    </>
  );
}
