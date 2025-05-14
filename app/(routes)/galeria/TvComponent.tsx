"use client";

import { useState, useRef, useEffect } from 'react';

interface TvComponentProps {
  videoUrls: string[];
  initialVideoIndex?: number;
}

export default function TvComponent({ videoUrls, initialVideoIndex = 0 }: TvComponentProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(initialVideoIndex);
  const [isOn, setIsOn] = useState(false);
  const [volume, setVolume] = useState(50);
  const [showControls, setShowControls] = useState(false);
  const tvRef = useRef<HTMLDivElement>(null);

  // Función para extraer el ID del video de YouTube
  const getYoutubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Cambiar al siguiente video
  const nextVideo = () => {
    if (isOn) {
      setCurrentVideoIndex((prev) => (prev + 1) % videoUrls.length);
    }
  };

  // Cambiar al video anterior
  const prevVideo = () => {
    if (isOn) {
      setCurrentVideoIndex((prev) => (prev - 1 + videoUrls.length) % videoUrls.length);
    }
  };

  // Encender/apagar la TV
  const togglePower = () => {
    setIsOn(!isOn);
  };

  // Ajustar volumen
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value));
  };

  // Efecto de estática al encender/apagar
  useEffect(() => {
    if (tvRef.current) {
      if (isOn) {
        tvRef.current.classList.add('tv-on');
        tvRef.current.classList.remove('tv-off');
      } else {
        tvRef.current.classList.add('tv-off');
        tvRef.current.classList.remove('tv-on');
      }
    }
  }, [isOn]);

  // Obtener el ID del video actual
  const currentVideoId = getYoutubeVideoId(videoUrls[currentVideoIndex]);

  return (
    <div className="tv-component-container my-16 flex flex-col items-center">
      <div className="tv-set relative">
        {/* Mueble de TV */}
        <div className="tv-furniture w-[340px] sm:w-[440px] md:w-[540px] lg:w-[640px] h-[60px] bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-lg shadow-xl"></div>
        
        {/* Cuerpo de la TV */}
        <div className="tv-body w-[320px] sm:w-[420px] md:w-[520px] lg:w-[620px] h-[240px] sm:h-[315px] md:h-[390px] lg:h-[465px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl border-8 border-gray-700 relative overflow-hidden">
          
          {/* Pantalla de TV */}
          <div 
            ref={tvRef}
            className={`tv-screen w-full h-full bg-black overflow-hidden relative ${isOn ? 'tv-on' : 'tv-off'}`}
          >
            {isOn && currentVideoId ? (
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=${volume === 0 ? 1 : 0}&volume=${volume/100}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            ) : (
              <div className="static-screen w-full h-full bg-gray-900 flex items-center justify-center">
                <div className="static-noise absolute inset-0 opacity-30"></div>
                <div className="power-text text-gray-400 text-xl font-mono">TV APAGADA</div>
              </div>
            )}
          </div>
          
          {/* Luz indicadora de encendido */}
          <div className={`power-indicator absolute bottom-3 right-3 w-3 h-3 rounded-full ${isOn ? 'bg-red-500' : 'bg-gray-600'}`}></div>
        </div>
        
        {/* Panel de control */}
        <div className="tv-controls mt-4 flex justify-center space-x-6 items-center">
          <button 
            onClick={togglePower}
            className="power-btn w-12 h-12 rounded-full bg-gradient-to-b from-gray-700 to-gray-900 border-2 border-gray-600 flex items-center justify-center shadow-lg hover:from-gray-600 hover:to-gray-800 transition-all duration-300"
          >
            <div className={`w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center ${isOn ? 'text-red-500' : 'text-gray-500'}`}>
              <span className="text-lg font-bold">⏻</span>
            </div>
          </button>
          
          <div className="channel-controls flex space-x-3">
            <button 
              onClick={prevVideo}
              disabled={!isOn}
              className={`channel-btn w-10 h-10 rounded-lg bg-gradient-to-b from-gray-700 to-gray-900 border-2 border-gray-600 flex items-center justify-center shadow-md ${isOn ? 'hover:from-gray-600 hover:to-gray-800' : 'opacity-50'} transition-all duration-300`}
            >
              <span className="text-gray-300">◀</span>
            </button>
            <button 
              onClick={nextVideo}
              disabled={!isOn}
              className={`channel-btn w-10 h-10 rounded-lg bg-gradient-to-b from-gray-700 to-gray-900 border-2 border-gray-600 flex items-center justify-center shadow-md ${isOn ? 'hover:from-gray-600 hover:to-gray-800' : 'opacity-50'} transition-all duration-300`}
            >
              <span className="text-gray-300">▶</span>
            </button>
          </div>
          
          <div className="volume-control flex items-center space-x-2">
            <button 
              onClick={() => setShowControls(!showControls)}
              disabled={!isOn}
              className={`volume-btn w-10 h-10 rounded-lg bg-gradient-to-b from-gray-700 to-gray-900 border-2 border-gray-600 flex items-center justify-center shadow-md ${isOn ? 'hover:from-gray-600 hover:to-gray-800' : 'opacity-50'} transition-all duration-300`}
            >
              <span className="text-gray-300">{volume > 0 ? '🔊' : '🔇'}</span>
            </button>
            
            {showControls && isOn && (
              <div className="volume-slider-container absolute bottom-16 bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-700 z-10">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={volume} 
                  onChange={handleVolumeChange}
                  className="volume-slider w-24 accent-amber-500"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Información del video */}
      {isOn && (
        <div className="video-info mt-6 text-center">
          <p className="text-lg font-medium text-amber-800 dark:text-amber-200">
            Video {currentVideoIndex + 1} de {videoUrls.length}
          </p>
        </div>
      )}
      
      {/* Estilos para la estática de TV */}
      <style jsx>{`
        .static-noise {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4KICA8ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIgc2VlZD0iMCIgcmVzdWx0PSJub2lzZSI+PC9mZVR1cmJ1bGVuY2U+CiAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIj48L2ZlQ29sb3JNYXRyaXg+CiAgPC9maWx0ZXI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wNSI+PC9yZWN0Pgo8L3N2Zz4=');
          animation: static 0.5s infinite;
        }
        
        @keyframes static {
          0% { background-position: 0 0; }
          20% { background-position: 20% 20%; }
          40% { background-position: -30% 40%; }
          60% { background-position: 40% -50%; }
          80% { background-position: -40% 60%; }
          100% { background-position: 0 0; }
        }
        
        .tv-on {
          animation: turnOn 0.8s ease-in-out;
        }
        
        .tv-off {
          animation: turnOff 0.4s ease-in-out;
        }
        
        @keyframes turnOn {
          0% { 
            transform: scale(0.01); 
            opacity: 0;
            filter: brightness(10);
          }
          50% { 
            transform: scale(1.1);
            filter: brightness(5);
          }
          100% { 
            transform: scale(1); 
            opacity: 1;
            filter: brightness(1);
          }
        }
        
        @keyframes turnOff {
          0% { 
            transform: scale(1); 
            opacity: 1;
          }
          20% { 
            transform: scale(1.1);
            opacity: 0.8;
          }
          100% { 
            transform: scale(0.1); 
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}