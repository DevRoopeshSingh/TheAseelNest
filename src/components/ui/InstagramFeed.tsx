import Image from "next/image";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";

export function InstagramFeed() {
  const posts = [
    {
      image: "/images/aseel_gallery_one_1774342457261.png",
      likes: "1,245",
      caption: "Our latest batch of Parrot Beak Aseel chicks showing exceptional bone density and structure. Pure aggressive stance even at this age. #Aseel #ParrotBeakAseel",
      date: "2 DAYS AGO"
    },
    {
      image: "/images/aseel_gallery_two_1774342477735.png",
      likes: "892",
      caption: "Perfection in genetics. The classic pearl eye and short curved beak that defines the true Indian heritage breed. #AseelBreeders #PoultryFarm",
      date: "5 DAYS AGO"
    },
    {
      image: "/images/aseel_gallery_three_1774342498807.png",
      likes: "2,104",
      caption: "Secure your bloodline today. We are taking advance bookings for the upcoming season. Strict quality control at our Maharashtra facility. #TheAseelNest",
      date: "1 WEEK AGO"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {posts.map((post, i) => (
        <div key={i} className="w-full max-w-[340px] bg-white border border-brand-beige-dark rounded-[3px] overflow-hidden shadow-sm flex flex-col hover:-translate-y-1 transition-transform duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-brand-beige-dark/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white font-serif text-xs font-bold shrink-0">
                AN
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 leading-none mb-1">theaseelnest</p>
                <p className="text-[10px] text-gray-500 leading-none">Maharashtra, India</p>
              </div>
            </div>
            <MoreHorizontal size={20} className="text-gray-500 cursor-pointer" />
          </div>
          
          {/* Image */}
          <div className="relative aspect-square w-full">
            <Image src={post.image} alt="Instagram Post Showcase" fill className="object-cover" sizes="(max-width: 768px) 100vw, 340px" />
          </div>
          
          {/* Actions */}
          <div className="p-3">
            <div className="flex justify-between mb-3">
              <div className="flex gap-4">
                <Heart size={24} className="text-gray-800 hover:text-red-500 cursor-pointer transition-colors" />
                <MessageCircle size={24} className="text-gray-800 cursor-pointer hover:text-gray-500 transition-colors" />
                <Send size={24} className="text-gray-800 cursor-pointer hover:text-gray-500 transition-colors" />
              </div>
              <Bookmark size={24} className="text-gray-800 cursor-pointer hover:text-gray-500 transition-colors" />
            </div>
            
            <p className="font-bold text-sm text-gray-900 mb-1">{post.likes} likes</p>
            <p className="text-sm text-gray-800 line-clamp-2 leading-snug">
              <span className="font-bold mr-2">theaseelnest</span>
              {post.caption}
            </p>
            <p className="text-[10px] text-gray-400 mt-2 tracking-wide font-medium">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
