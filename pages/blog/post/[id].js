import { getAllPostIds, getPostContent } from "lib/posts";
import useLocalStorage from "lib/useLocalStorage";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@components/Buttons/themetoggle";

const BlogPost = ({ postData }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <ThemeToggle toggleTheme={toggleTheme} />
      <article className="container dark:text-swhite mx-auto my-10 md:px-36 p-3">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="w-full h-[200px]">
            <Image
              src={postData.image}
              className="w-full h-full object-cover rounded-lg"
              width={500}
              height={500}
              alt={postData.title}
            />
          </div>
          <h1 className="text-3xl font-bold">{postData.title}</h1>
          <div className="flex flex-row gap-5 items-center">
            <div className="flex flex-row items-center gap-2">
              <svg
                className="dark:stroke-swhite"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="5" width="16" height="16" rx="2" />
                <line x1="16" y1="3" x2="16" y2="7" />
                <line x1="8" y1="3" x2="8" y2="7" />
                <line x1="4" y1="11" x2="20" y2="11" />
                <rect x="8" y="15" width="2" height="2" />
              </svg>
              <p className="text-sm">{postData.date}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <svg
                className="dark:stroke-swhite"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
              <p className="text-sm">{postData.author}</p>
            </div>
          </div>
          <main
            className="xl:mx-28 lg:mx-10"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
      </article>
      <footer className="flex flex-col justify-center items-center m-10 dark:text-swhite">
        <p className="text-sm">© {new Date().getFullYear()} sebasmorant.</p>
        <p className="text-sm">
          <Link href="/blog">
            <span className="underline decoration-dotted">volver atrás</span>
          </Link>
        </p>
      </footer>
    </>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostContent(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default BlogPost;
