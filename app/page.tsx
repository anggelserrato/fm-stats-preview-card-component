import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-950 text-white">
      <section className="flex w-[87%] flex-col items-center justify-center overflow-hidden rounded-lg bg-blue-950 text-center shadow-card md:max-w-[564px] xl:h-[442px] xl:max-w-[1128px] xl:flex-row-reverse">
        <div className="relative w-full bg-purple-500 md:hidden">
          <Image
            src="/image-header-mobile.jpg"
            width={654}
            height={480}
            alt="People having fun"
            className="w-full object-contain opacity-75 mix-blend-multiply"
          />
        </div>
        <div className="relative hidden w-full bg-purple-500 md:block">
          <Image
            src="/image-header-desktop.jpg"
            width={540}
            height={446}
            alt="People having fun"
            className="w-full object-contain opacity-75 mix-blend-multiply"
          />
        </div>
        <article className="flex h-auto flex-col px-400 py-300 md:px-1000 md:py-800 md:text-start">
          <h1 className="my-100 text-preset-2 md:mt-0 md:mb-300 md:text-preset-1">
            Get <span className="text-purple-500">insights</span> that help your
            business grow.
          </h1>
          <p className="mb-500 text-preset-4 opacity-[0.75] md:mb-900 md:w-[374px]">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex flex-col gap-400 md:flex-row md:gap-800 md:text-start">
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
