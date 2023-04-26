import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>{`Rentlux - Home`}</title>
      </Head>
      <main className="flex flex-col items-center">
        <>
          <h1 className="text-3xl font-bold underline text-green-700 hover:text-blue-500 cursor-pointer">Hello World!</h1>
          <button className="rounded-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 my-10">Click</button>
        </>
      </main>
    </>
  );
}

export default HomePage;
