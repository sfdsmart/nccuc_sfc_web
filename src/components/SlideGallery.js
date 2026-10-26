import Image from "next/image";

// 依序顯示簡報頁面（16:9），點擊圖片可開新分頁看原尺寸
export default function SlideGallery({ slides }) {
  return (
    <div className="space-y-6 lg:space-y-8">
      {slides.map(({ src, alt }) => (
        <a
          key={src}
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
        >
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full h-auto"
          />
        </a>
      ))}
    </div>
  );
}
