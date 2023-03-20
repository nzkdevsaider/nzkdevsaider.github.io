import { getSortedPostsData, getPostsCount } from "lib/posts";
import BlogSection from "@components/Sections/BlogSection";
import SLogo from "@components/SLogo";
import Head from "next/head";
import Link from "next/link";

const BlogPage = ({ allPostsData, postsCount }) => {
  return (
    <>
      <Head>
        <title>sebasmorant. | blog</title>
      </Head>
      <header className="m-10">
        <div className="flex flex-row items-center">
          <div className="flex flex-col gap-2 mr-10">
            <SLogo />
            <h2>blog</h2>
          </div>
          <div className="flex flex-row gap-2 text-sm">
            <p>
              {postsCount} {postsCount === 1 ? "post" : "posts"}
            </p>
            <Link href="/">
              <p className="underline decoration-dotted">volver al inicio</p>
            </Link>
          </div>
        </div>
      </header>
      <BlogSection
        page
        postsData={{ posts: allPostsData, count: postsCount }}
      />
      <footer className="m-10">
        <p className="text-sm">
          © {new Date().getFullYear()} sebasmorant.
        </p>
      </footer>
    </>
  );
};

export async function getStaticProps() {
  const postsCount = getPostsCount();
  const allPostsData = getSortedPostsData(postsCount);

  return {
    props: {
      allPostsData,
      postsCount,
    },
  };
}

export default BlogPage;
