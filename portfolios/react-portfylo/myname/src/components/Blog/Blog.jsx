import BlogCard from "./BlogCard";

export default function Blog() {
  const blogPosts = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1724190500169-e9f1ca06e786?q=80&w=985&auto=format&fit=crop",
      date: "Mar. 15th 2016",
      title: "Photoshoot On The Street",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
      likes: 249,
      views: 308,
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1723053145751-9aacd7c47df1?w=500&auto=format&fit=crop",
      date: "Mar. 15th 2016",
      title: "Surfing at Philippines",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
      likes: 249,
      views: 308,
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1724562834820-dc1643232efc?w=500&auto=format&fit=crop",
      date: "Mar. 15th 2016",
      title: "Capture Living On Uderwater",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
      likes: 249,
      views: 308,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-black text-lg font-normal py-[112px] px-4 max-w-[1170px] mx-auto">
      <div className="text-center">
        <div className="text-4xl font-mono text-black mb-5">
          <h1>Post on Medium</h1>
        </div>
        <div className="max-w-[750px] mx-auto mb-[127px] text-xl leading-6 text-gray-500">
          <p>
            Dignissimos asperiores vitae velit veniam totam fuga molestias
            accusamus alias autem provident...
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-7">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
