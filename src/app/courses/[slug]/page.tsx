import { Button } from "@/components/ui/moving-border";
import musicData from "@/data/music_courses.json";
import Image from "next/image";

function page({ params }: { params: { slug: string } }) {
  const course = musicData.courses.find(
    (course) => course.slug === params.slug
  );

  if (!course) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-2xl text-white">
        404 | Course Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 pt-36 px-10">
      <h1 className="text-lg md:text-7xl font-sans font-bold mb-8 text-white">
        {course.title}
      </h1>
      <Image
        src={course.image}
        height="1000"
        width="1000"
        className="h-60 w-full max-w-lg object-cover rounded-xl"
        alt={course.title}
      />
      <p className="py-2 font-bold">{course.description}</p>
      <p>- {course.instructor}</p>
      <Button>{course.price}</Button>
    </div>
  );
}

export default page;

export async function generateStaticParams() {
  const slugs = musicData.courses.map((course) => course.slug);

  return slugs.map((slug) => ({
    slug,
  }));
}
