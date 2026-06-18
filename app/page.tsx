import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-white">
      <section className="flex w-[87%] flex-col items-center justify-center overflow-hidden rounded-lg bg-blue-950 text-center shadow-card">
        <div className="relative bg-purple-500">
          <Image
            src="/image-header-mobile.jpg"
            width={654}
            height={480}
            alt="People having fun"
            className="h-full w-full object-cover opacity-75 mix-blend-multiply"
          />
        </div>
        <article className="px-400 py-300">
          <h1 className="mx-100 text-preset-2">
            Get <span className="text-purple-500">insights</span> that help your
            business grow.
          </h1>
          <p className="mb-500 text-preset-4 opacity-[0.75]">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex flex-col gap-400">
            <div>
              <p className="text-preset-3">10k+</p>
              <p className="text-preset-5 opacity-[0.6]">companies</p>
            </div>
            <div>
              <p className="text-preset-3">314</p>
              <p className="text-preset-5 opacity-[0.6]">templates</p>
            </div>
            <div>
              <p className="text-preset-3">12m+</p>
              <p className="text-preset-5 opacity-[0.6]">queries</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
