import SText from "@components/SText";
import Link from "next/link";
import BlogCard from "./BlogCard";

const BlogSection = ({ page, postsData }) => {
  if (page) {
    return (
      <section className="container m-auto my-10">
        <div className="grid md:grid-rows-2 md:grid-flow-col grid-cols-2 gap-2">
          {postsData.posts.map(({ id, date, title, image }) => (
            <BlogCard
              key={id}
              id={id}
              date={date}
              title={title}
              image={image}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mx-5 md:mx-auto md:max-w-[900px] md:w-full mb-28">
      <div id="blog" className="mb-16">
        <SText>Blog</SText>
      </div>
      <div className="flex flex-col md:flex-row gap-8 place-content-center mb-5">
        {postsData.posts.map(({ id, date, title, image }) => (
          <BlogCard key={id} id={id} date={date} title={title} image={image} />
        ))}
      </div>
      <div className="flex flex-col justify-center">
        <Link href="/blog">
          <div className="flex flex-row justify-center gap-2 items-center bg-sblue rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
              <line x1="10" y1="14" x2="20" y2="4" />
              <polyline points="15 4 20 4 20 9" />
            </svg>
            <span className="text-swhite font-extrabold">
              Ver todas las publicaciones ({postsData.count})
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
