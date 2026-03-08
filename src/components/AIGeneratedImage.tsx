import { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface AIGeneratedImageProps {
  prompt: string;
  alt: string;
  className?: string;
}

export function AIGeneratedImage({ prompt, alt, className = '' }: AIGeneratedImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateImage = async () => {
      // Check cache first
      const cacheKey = `img_${btoa(prompt).substring(0, 50)}`;
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        setImageUrl(cached);
        setLoading(false);
        return;
      }

      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        });

        let base64Data = '';
        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            base64Data = part.inlineData.data;
            break;
          }
        }

        if (base64Data) {
          const url = `data:image/png;base64,${base64Data}`;
          setImageUrl(url);
          try {
            localStorage.setItem(cacheKey, url);
          } catch (e) {
            // Ignore quota exceeded errors
          }
        } else {
          setError('No image generated');
        }
      } catch (err: any) {
        console.error('Failed to generate image:', err);
        setError(err.message || 'Failed to generate image');
      } finally {
        setLoading(false);
      }
    };

    generateImage();
  }, [prompt]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-slate-100 animate-pulse rounded-2xl ${className}`}>
        <div className="flex flex-col items-center text-slate-400">
          <svg className="w-8 h-8 mb-2 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-sm font-medium">Generating AI Image...</span>
        </div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`flex items-center justify-center bg-slate-100 rounded-2xl ${className}`}>
        <span className="text-slate-400 text-sm">Image failed to load</span>
      </div>
    );
  }

  return <img src={imageUrl} alt={alt} className={className} referrerPolicy="no-referrer" />;
}
