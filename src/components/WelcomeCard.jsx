import timetable from "../assets/timetable.svg";

export default function Dcard() {
  return (
    <>
      <div className="relative p-3  bg-darkest text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 p-1 text-lg font-bold   dark:text-white">
          Welcome back
        </h5>
        <p className="mb-3 font-normal  dark:text-gray-400">
          I hope you are doing well,
          <br /> How can I help you?
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <div className="absolute bottom-0 right-0">
          <img src={timetable} />
        </div>
      </div>
    </>
  );
}

{
  /* verified icon  
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"/>
</svg> 


work icon
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
    <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
</svg>



*/
}
