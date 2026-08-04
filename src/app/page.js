import fs from 'fs';
import path from 'path';
import Banner from '../components/Banner';

export default function Home() {
  const bannerDir = path.join(process.cwd(), 'public', 'banner_photos');
  const files = fs.readdirSync(bannerDir).filter(file =>
    file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg') || file.endsWith('.gif')
  );
  files.sort((a, b) => {
    const aFirst = a.includes('tcfd_banner');
    const bFirst = b.includes('tcfd_banner');
    if (aFirst && !bFirst) return -1;
    if (!aFirst && bFirst) return 1;
    return a.localeCompare(b);
  });
  const images = files.map(file => `/banner_photos/${file}`);

  return (
    <main className="flex flex-col items-center justify-start">
      {/* Banner 輪播區塊 */}
      <Banner images={images} />
    </main>
  );
}