import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');

async function optimize() {
  console.log('Optimizing images in public directory...');

  // 1. Logo optimization
  const logoPath = path.join(publicDir, 'logo.png');
  if (fs.existsSync(logoPath)) {
    console.log('Optimizing logo.png...');
    const logoInputBuffer = fs.readFileSync(logoPath);
    const logoWebpBuffer = await sharp(logoInputBuffer)
      .resize({ height: 240, fit: 'contain' })
      .webp({ quality: 90 })
      .toBuffer();
    fs.writeFileSync(path.join(publicDir, 'logo.webp'), logoWebpBuffer);

    const logoPngBuffer = await sharp(logoInputBuffer)
      .resize({ height: 240, fit: 'contain' })
      .png({ compressionLevel: 9, palette: true })
      .toBuffer();
    fs.writeFileSync(logoPath, logoPngBuffer);
    console.log(`logo.png original size reduced to: ${logoPngBuffer.length} bytes`);
    console.log(`logo.webp created with size: ${logoWebpBuffer.length} bytes`);
  }

  // 2. Hero Slider images optimization
  const heroImages = [
    { src: 'Gemini_Generated_Image_o0yjyfo0yjyfo0yj.jpeg', destName: 'hero-1' },
    { src: 'freight-knowledge.jpeg', destName: 'hero-2' },
    { src: 'industry-updates.png', destName: 'hero-3' },
    { src: 'client-solutions.png', destName: 'hero-4' },
    { src: 'corporate-growth.png', destName: 'hero-5' }
  ];

  for (const img of heroImages) {
    const srcPath = path.join(publicDir, img.src);
    if (!fs.existsSync(srcPath)) continue;

    console.log(`Processing ${img.src}...`);
    const inputBuffer = fs.readFileSync(srcPath);

    // Create high-efficiency WebP image
    const webpBuffer = await sharp(inputBuffer)
      .resize({ width: 1920, height: 1080, fit: 'cover', withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toBuffer();

    const webpPath = path.join(publicDir, `${img.destName}.webp`);
    fs.writeFileSync(webpPath, webpBuffer);
    console.log(`Created ${img.destName}.webp (${(webpBuffer.length / 1024).toFixed(1)} KB)`);

    // Also optimize fallback image
    const ext = path.extname(img.src).toLowerCase();
    let fallbackBuffer;
    if (ext === '.png') {
      fallbackBuffer = await sharp(inputBuffer)
        .resize({ width: 1920, height: 1080, fit: 'cover', withoutEnlargement: true })
        .png({ quality: 80, compressionLevel: 8 })
        .toBuffer();
    } else {
      fallbackBuffer = await sharp(inputBuffer)
        .resize({ width: 1920, height: 1080, fit: 'cover', withoutEnlargement: true })
        .jpeg({ quality: 82, progressive: true })
        .toBuffer();
    }
    fs.writeFileSync(srcPath, fallbackBuffer);
    console.log(`Compressed fallback ${img.src} to (${(fallbackBuffer.length / 1024).toFixed(1)} KB)`);
  }

  console.log('Image optimization complete!');
}

optimize().catch(console.error);
