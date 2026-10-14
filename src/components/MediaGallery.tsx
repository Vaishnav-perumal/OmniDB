import React, { useState } from 'react';
import { Game } from '../types/database';
import { Image as ImageIcon, Maximize2, X, Film } from 'lucide-react';

interface MediaGalleryProps {
  game: Game;
}

export const MediaGallery: React.FC<MediaGalleryProps> = ({ game }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allImages = Array.from(
    new Set(
      [
        game.poster_image,
        game.header_image,
        game.background_image,
        ...(game.screenshots || [])
      ].filter(Boolean) as string[]
    )
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-2 border-b border-[#1b2838]">
        <div>
          <h3 className="text-base font-bold text-white tracking-wide uppercase font-mono flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-[#38bdf8]" />
            Official Media & Screenshots
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            High-resolution artwork, official screenshots, and promotional media.
          </p>
        </div>
        <span className="text-xs font-mono text-zinc-500">
          {allImages.length} Images Available
        </span>
      </div>

      {/* Featured Backdrop Banner */}
      {game.background_image && (
        <div className="relative rounded-2xl overflow-hidden border border-[#1b2838] aspect-[21/9] sm:aspect-[24/9] bg-black/50 group shadow-xl">
          <img
            src={game.background_image}
            alt={`${game.title} Key Art`}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-transparent to-black/30" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-xs font-mono text-white border border-white/10">
              Official Key Artwork
            </span>
            <button
              onClick={() => setSelectedImage(game.background_image)}
              className="p-2 rounded-lg bg-black/75 hover:bg-black text-white backdrop-blur-md transition-colors border border-white/10"
              title="Expand Image"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Screenshots Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allImages.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(img)}
            className="group relative rounded-xl overflow-hidden border border-[#1b2838] hover:border-[#38bdf8] aspect-[16/9] bg-black/40 cursor-pointer shadow-md transition-all hover:-translate-y-0.5"
          >
            <img
              src={img}
              alt={`${game.title} Screenshot ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="p-2 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
            <div className="absolute bottom-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-zinc-300 border border-white/10">
              Media #{idx + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 p-1.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged media"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl border border-[#2a475e] shadow-2xl"
            />
            <div className="mt-3 text-xs font-mono text-zinc-400">
              {game.title} • High-Resolution Artwork
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
