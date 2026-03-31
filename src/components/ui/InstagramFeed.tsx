import Image from "next/image";

const posts = [
  {
    image: "/images/aseel_gallery_one_1774342457261.png",
    alt: "Parrot Beak Aseel chick showing curved beak structure",
    likes: "1,245",
    caption: "Our latest batch showing exceptional bone density and structure. Pure aggressive stance even at this age.",
    priority: true,
  },
  {
    image: "/images/aseel_gallery_two_1774342477735.png",
    alt: "Young white Aseel bird at The Aseel Nest",
    likes: "892",
    caption: "Perfection in genetics. The classic pearl eye and short curved beak that defines the true Indian heritage breed.",
    priority: false,
  },
  {
    image: "/images/aseel_gallery_three_1774342498807.png",
    alt: "Group of premium Aseel chicks at farm",
    likes: "2,104",
    caption: "Taking advance bookings for the upcoming season. Strict quality control at our Maharashtra facility.",
    priority: false,
  }
];

export function InstagramFeed() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, i) => (
        <article key={i} className="bg-brand-sand/50 border border-brand-beige rounded overflow-hidden hover:shadow-md transition-shadow duration-300 group">
          {/* Square image */}
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={post.priority}
            />
          </div>
          {/* Card body */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center text-white text-[9px] font-bold shrink-0" aria-hidden="true">AN</div>
              <span className="text-xs font-semibold text-brand-text">theaseelnest</span>
              <span className="text-[10px] text-brand-text-muted">• Maharashtra</span>
            </div>
            <p className="text-xs text-brand-text-muted leading-relaxed line-clamp-2 mb-2">{post.caption}</p>
            <p className="text-xs font-semibold text-brand-text">{post.likes} likes</p>
          </div>
        </article>
      ))}
    </div>
  );
}
