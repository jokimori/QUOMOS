'use client';

import '../globals.css';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

// Hook para detectar si un elemento está en pantalla
const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isIntersecting };
};

const QuomosLanding = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [randomVideo, setRandomVideo] = useState('');

  useEffect(() => {
    const videos = ['/armadouno.mp4'];
    const randomIndex = Math.floor(Math.random() * videos.length);
    setRandomVideo(videos[randomIndex]);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      video.pause();
    };

    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const imagenes = [
    { nombre: 'pelotapulpo.png', titulo: 'Pelota Pulpo' },
    { nombre: 'tazasdurax.png', titulo: 'Tazas Durax' },
    { nombre: 'cenicerodiagonal.png', titulo: 'Cenicero Diagonal' },
    { nombre: 'mobiliarioescolar.png', titulo: 'Mobiliario Escolar' },
    { nombre: 'archivodelamemoriatrans.png', titulo: 'Archivo de la Memoria Trans Argentina' },
    { nombre: 'bancobuenosaires.png', titulo: 'Banco Buenos Aires' },
    { nombre: 'diand.png', titulo: 'Banco Encuentros' },
    { nombre: 'taxis.png', titulo: 'Parada de taxis' },
    { nombre: 'bovedacascara.png', titulo: 'Bóveda Cáscara' },
    { nombre: 'myadeplazademayo.png', titulo: 'Madres y Abuelas de Plaza de Mayo' },
    { nombre: 'licra.png', titulo: 'Publicidad Hilados Licra Ducilo' },
    { nombre: 'teatrazo.png', titulo: 'Teatrazo 85' },
    { nombre: 'festival.png', titulo: 'Festival de Cine de Mar del Plata' },
    { nombre: 'revistasur.png', titulo: 'Revista Sur' },
    { nombre: 'escudonacional.png', titulo: 'Escudo de la República Argentina' },
  ];

  const logo = useInView();
  const sobreNosotros = useInView();
  const videosExtra = useInView();
  const nuestraColeccion = useInView();
  const donde = useInView();
  const app = useInView();

  return (
    <div className="bg-[#F2F2E8] text-black font-sans px-6 py-12 relative overflow-hidden">
      {/* Logo */}
      <div
        ref={logo.ref}
        className={`flex justify-center fade-up ${logo.isIntersecting ? 'show' : ''}`}
      >
        <Image src="/Group 1.png" alt="Quomos Logo" width={500} height={100} />
      </div>

      {/* Fondo de textura arriba espejado */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[120px] w-screen h-[1300px] z-0 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/textu.png')",
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            opacity: 0.1,
            mixBlendMode: 'multiply',
            transform: 'scaleX(-1)',
          }}
        />
      </div>

      {/* Sobre Nosotros + Video */}
      <div
        ref={sobreNosotros.ref}
        className={`w-full px-[40px] mt-[80px] flex flex-col lg:flex-row gap-[60px] justify-center fade-up ${
          sobreNosotros.isIntersecting ? 'show' : ''
        }`}
      >
        <div className="max-w-[600px]">
          <h2 className="text-4xl font-museo font-bold tracking-tight mb-6">
            Sobre nosotros
          </h2>
          <p className="text-[18px] leading-relaxed text-neutral-700">
            Nuestro propósito es el de unir a las personas. Poner el foco en el ser humano, promover el aprecio por el otro, la empatía y la unión.
            <br /><br />
            Creemos que en esta vida, compartimos con los otros mucho más de lo que pensamos. Desde ideales hasta un banco en la calle. El aire que respiramos y el planeta que habitamos.
            <br /><br />
            En estos últimos tiempos, sentimos que con el avance de la tecnología se está perdiendo un poco el contacto de humano a humano. No estamos necesariamente en contra del mismo, pero queremos que exista un equilibrio entre la tecnología que nos rodea y la forma que tenemos de relacionarnos con los otros.
            <br /><br />
            Queremos reforzar la idea de comunidad, con la esperanza de que juntxs podamos formar un futuro mejor.
          </p>
        </div>

        <div className="w-full max-w-[500px] h-[500px] overflow-hidden">
          {randomVideo && (
            <video
              ref={videoRef}
              src={randomVideo}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
            />
          )}
        </div>
      </div>

      {/* Videos extra */}
      <div
        ref={videosExtra.ref}
        className={`w-full px-[40px] mt-[40px] flex flex-col lg:flex-row gap-[20px] justify-center fade-up ${
          videosExtra.isIntersecting ? 'show' : ''
        }`}
      >
        {['videosweb.mp4', 'videoweb2.mp4', 'videoweb3.mp4'].map((video, index) => (
          <div
            key={index}
            className="w-full mt-12 max-w-[400px] h-[400px] overflow-hidden"
          >
            <video
              src={`/${video}`}
              width={400}
              height={400}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        ))}
      </div>

      {/* Nuestra colección con textura */}
      <div
        ref={nuestraColeccion.ref}
        className={`relative max-w-5xl mx-auto mt-24 text-left px-6 fade-up ${
          nuestraColeccion.isIntersecting ? 'show' : ''
        }`}
      >
        {/* Fondo de textura */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-screen h-full z-0 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/textu.png')",
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto',
              opacity: 0.1,
              mixBlendMode: 'multiply',
            }}
          />
        </div>

        {/* Contenido */}
        <div className="relative z-10">
          <h2 className="text-3xl font-museo font-bold tracking-tight mb-8">
            Nuestra colección
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {imagenes.map(({ nombre, titulo }, index) => (
              <div
                key={index}
                className={`group relative w-full transform transition duration-300 hover:scale-105 hover:opacity-90 fade-up ${
                  nuestraColeccion.isIntersecting ? 'show' : ''
                }`}
              >
                <div className="relative w-full h-[200px]">
                  <Image
                    src={`/${nombre}`}
                    alt={titulo}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
                <p className="text-center mt-2 text-sm font-medium">{titulo}</p>

                {/* Cuadro de autor y año */}
                <div className="absolute top-2 left-2 bg-[#F2F2E8] text-black border border-neutral-300 rounded-md px-4 py-2 opacity-0 group-hover:opacity-100 transition duration-300 text-base shadow-md">
                  {index === 0
                    ? 'Gerildo Lanfranconi, 1936'
                    : index === 1
                    ? 'Durax, 1972'
                    : index === 2
                    ? 'Ariel Scornik, 1971-1972'
                    : index === 3
                    ? 'Ricardo Blanco, Osvaldo Fausi, Mario Mariño, Pedro Backis, Hector ferrari, 1979-1982'
                    : index === 4
                    ? 'Verónica Fieiras, 2020'
                    : index === 5
                    ? 'Grupo Bondi, 2010'
                    : index === 6
                    ? 'Diana Cabezas, 2009'
                    : index === 7
                    ? 'Estudio Gonzáles Ruiz y Shakespear, 1971-1972'
                    : index === 8
                    ? 'Amancio Williams, 1952-2000'
                    : index === 9
                    ? 'Desconocida, 1977'
                    : index === 10
                    ? 'Ángela Vassallo, 1972'
                    : index === 11
                    ? 'Ricardo Carpani, 1985'
                    : index === 12
                    ? 'Secretaría de Prensa y Difusión, 1979-1982'
                    : index === 13
                    ? 'Alejandro Cristoff, 1931-1992'
                    : 'José de la Peña, 1813'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dónde encontrarnos */}
      <div
        ref={donde.ref}
        className={`max-w-5xl mx-auto mt-24 text-center px-6 fade-up ${
          donde.isIntersecting ? 'show' : ''
        }`}
      >
        <h2 className="text-3xl font-museo font-bold tracking-tight mb-8">
          Dónde encontrarnos
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {['plazalasheras', 'plazasanmartinn', 'fotosubte2'].map((lugar, index) => (
            <div
              key={index}
              className={`flex flex-col items-center hover:scale-105 hover:opacity-90 transition fade-up ${
                donde.isIntersecting ? 'show' : ''
              }`}
            >
              <div className="relative w-[300px] h-[300px]">
                <Image
                  src={`/${lugar}.png`}
                  alt={lugar}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-center mt-4 text-base font-medium">
                {index === 0 ? 'Parque Las Heras' : index === 1 ? 'Plaza San Martín' : 'Línea B'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* App */}
<div
  ref={app.ref}
  className={`max-w-2xl mx-auto mt-12 text-center px-6 fade-up ${
    app.isIntersecting ? 'show' : ''
  }`}
>
  <p className="text-xl font-semibold mb-4">Descargá nuestra app</p>
  <a
    href="https://www.figma.com/proto/8bqgSw9msYrsvkqW6WblDL/paginawebquomos?page-id=97%3A1003&node-id=97-1311&viewport=223%2C453%2C0.19&t=fquuVKtlPtZasV8K-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=97%3A1004&show-proto-sidebar=1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-[#EF3B24] text-white font-bold rounded-full py-3 px-12 text-lg hover:scale-105 hover:opacity-90 transition">
      Acá
    </button>
  </a>
</div>

<div
  className={`max-w-2xl mx-auto mt-12 text-center px-6 fade-up ${
    app.isIntersecting ? 'show' : ''
  }`}
>
  <p className="text-xl font-semibold mb-4">Seguinos en Instagram @quomos__</p>
  <a
    href="https://www.instagram.com/quomos__/?hl=es"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-[#EF3B24] text-white font-bold rounded-full py-3 px-12 text-lg hover:scale-105 hover:opacity-90 transition">
      Acá
    </button>
  </a>
</div>


      {/* Footer */}
      <footer className="mt-24 py-12 border-t border-neutral-300 text-center text-sm text-neutral-500">
        © 2025 Quomos. Diseño Argentino. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default QuomosLanding;
