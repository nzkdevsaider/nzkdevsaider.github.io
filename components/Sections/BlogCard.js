import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ id, image, title, date }) => {
  return (
    <div className="w-[300px] h-[300px] m-auto">
      <Link href={`/blog/post/${id}`}>
        <div className="w-[297px] h-[172px]">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
            width={297}
            height={172}
          />
        </div>
        <div className="dark:text-swhite rounded-lg mt-3">
          <div className="font-bold italic text-sm">{date}</div>
          <div className="text-2xl font-bold">{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
