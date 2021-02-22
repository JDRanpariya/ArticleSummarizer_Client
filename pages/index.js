import Head from "next/head";
import "./_app.js";
import { React, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_HISTORY_SUMMARY,
  GET_RECENT_SUMMARYS,
} from "../lib/queries/getHistory";
import CREATE_SUMMARY from "../lib/mutations/createSummary";
import SCRAPE_SUMMARY from "../lib/mutations/scrapeSummary";
import Loading from "../lotties/Loading";
import Heart from "../lotties/heart";
import Panda from "../lotties/panda";

export default function Home() {
  const [contentraw, setContent] = useState("");
  const [urlraw, setURL] = useState("");

  const {
    data: recentarticles,
    loading: reloading,
    error: reerror,
  } = useQuery(GET_RECENT_SUMMARYS);
  // const {data: allarticles, loading: allloading, error: allerror} = useQuery(GET_HISTORY_SUMMARY, {pollInterval: 5000});

  const [
    createSummary,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_SUMMARY, {refetchQueries: [{
    query: GET_RECENT_SUMMARYS,
  
  }]});

  const [
    scrapeSummary,
    { loading: mutationscrapeLoading, error: mutationscrapeError },
  ] = useMutation(SCRAPE_SUMMARY, {refetchQueries: [{
    query: GET_RECENT_SUMMARYS,
  
  }]});

  if (mutationLoading) return <Loading />;
  if (mutationscrapeLoading) return <Loading />;

  if (reloading) return <Loading />;
  //if (allloading) return <Loading />;

  if (reerror || !recentarticles)
    return <h2 className="text-red-600">Error! ${reerror.message}</h2>;
  // if (allerror || !allarticles) return <h2 className='text-red-600'>Error! ${allerror.message}</h2>;

  // console.log(recentarticles)

  //if (data.recentArticles.length === 0) return <h2>404 Summary Not Found</h2>;

  // console.log(data)

  return (
    <div className="bg-green-50 pt-7 block overflow-hidden">
      <Head className="bg-green-50">
        <title>Article Summarizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="font-extrabold m-7 mt-0 text-4xl tracking-wider text-center text-black font-mono">
          Article Summarizer
        </h1>

        <p className="text-center text-lg px-3 m-2 text-gray-800 font-mono font-semibold">
          Just paste content of your article and get the summary generated by AI
          (using Huggingface Transformer)
        </p>

        <div className="grid md:grid-flow-col md:grid-cols-2 mx-8 md:mx-24 my-7 md:gap-x-12">
          <div className='flex-col-3'>
            <div>
              <form
                className=""
                onSubmit={(e) => {
                  e.preventDefault();
                  scrapeSummary({ variables: { url: urlraw } });
                }}
              >
                <input
                  className="focus:outline-none shadow-md border-transparent focus:border-transparent focus:ring-2 focus:ring-green-500 resize-none w-full border-2  mt-4 md:mt-14  rounded-md scale-y-100 p-2 text-mono text-base text-black "
                  onChange={(Event) => setURL(Event.target.value)}
                  placeholder="Enter URL"
                />

                <button
                  className="focus:outline-none mt-2 text-gray-900 bg-green-400 w-full py-2 my-2 hover:bg-green-500 font-mono rounded-lg text-xl text-center"
                  type="submit"
                >
                  Scrape article & Generate Summary
                </button>
              </form>
              <h2 className="text-gray-900 text-xl text-center "> OR </h2>
              <form
                className="flex flex-col"
                onSubmit={(e) => {
                  e.preventDefault();
                  createSummary({ variables: { content: contentraw } });
                }}
              >
                <textarea
                  className="focus:outline-none shadow-md border-transparent focus focus:border-transparent focus:ring-2 focus:ring-green-500 resize-none w-full border-2  mt-2 rounded-md min-h-full h-64 md:h-64 scale-y-100 p-2 text-mono text-base text-black "
                  onChange={(Event) => setContent(Event.target.value)}
                  placeholder="Paste your article content"
                />
                <button
                  className="focus:outline-none mt-2 text-gray-900 bg-green-400 w-full py-2 my-2 hover:bg-green-500 font-mono rounded-lg text-xl text-center"
                  type="submit"
                >
                  Generate Summary
                </button>
              </form>
            </div>

            {mutationError && <p>Error :( Please try again</p>}
            {mutationscrapeError && <p>Error :( Please try again</p>}
            <div className="flex-grow"></div>
            <div className="hidden  md:block md:justify-center md:align-bottom">
              <Panda height={425} width={500} />
              <div className="grid grid-flow-col mt-4 ">
                <div className="flex-grow"></div>
                <a href="https://github.com/jdranpariya" target="_blank">
                  <div className="border ml-5 w-auto border-green-500 p-3 text-center rounded-md hover:bg-green-300 shadow-2xl font-mono font-bold">
                    About Me{" "}
                  </div>
                </a>
                <div className="flex-grow"></div>
              </div>
            </div>
          </div>

          <div className="">
            <h3 className="text-center text-3xl mb-4 mt-4 md:mt-0 text-gray-900 font-mono">
              Recent Summaries
            </h3>
            <div className="grid grid-rows md:gap-x-4 ">
              {recentarticles.recentArticles.map((article) => (
                <div
                  key={article.id}
                  className="focus:outline-none rounded-md bg-green-300 m-2 p-4 hover:bg-white hover:border hover:border-green-400 shadow-lg divide-y divide-green-400"
                >
                  <div className="flex ">
                    <div className="text-left font-mono">
                      ArticleID: {article.id}
                    </div>
                    <div className="flex-grow"></div>
                    <div className="text-right font-mono">
                      {article.createdAt.split("T")[0]}
                    </div>
                    {/* {console.log((article.createdAt).split("T"))} */}
                  </div>
                  <div className="text-center mt-3 mb-3 text-gray-900">
                    {article.summaryofarticle}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden flex-row justify-center align-bottom">
            <Panda height={400} width={275} />
            <div className="grid grid-cols-1 flex-col gap-x-3 mt-4">
              <a href="https://github.com/jdranpariya" target="_blank">
                
                <div className="border w-auto border-green-500 p-3 text-center rounded-md hover:bg-green-300 hover:border-transparent shadow-2xl font-mono font-bold">
                  About Me
                </div>
                
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="">
        <Heart />
      </footer>
    </div>
  );
}
