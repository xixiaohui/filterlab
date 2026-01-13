export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-gray-700">
      <div className="flex-col">
        <p className="text-8xl text-blue-500 tracking-tighter text-balance">
          Image filters as pipelines, not presets.
        </p>
        <p className="text-base text-blue-500 tracking-tighter text-balance">
          Build, tweak, and share image processing pipelines in your browser.
        </p>

        <div className="flex items-center justify-center-safe">
          <button
            className="bg-sky-500 hover:bg-sky-700 rounded-xs p-3 mr-7"
          >Try the Lab</button>
          <button
            className="bg-sky-500 hover:bg-sky-700 rounded-xs p-3"
          >Explore Pipelines</button>
        </div>
      </div>
    </div>
  );
}
