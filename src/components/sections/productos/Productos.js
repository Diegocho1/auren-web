import M4_L3 from "@/assets/productos/drones/MATRICE_400_L3/m4_l31.webp";
import SLT12 from "@/assets/productos/estaciones/SLT_12/slt_121.webp";
import SLT10 from "@/assets/productos/estaciones/SLT_10/slt_101.webp";
import GNSS_RTK_EYR from "@/assets/productos/gps/GNSS_RTK_EYR/GNSS_RTK_EYR1.webp";
import SL9 from "@/assets/productos/gps/SL_9/sl_91.webp";
import PRISMA_SENCILLO from "@/assets/productos/niveles/PRISMA_SENCILLO/ps_1.png";
import PRISMA_COMPLETO from "@/assets/productos/niveles/PRISMA_COMPLETO/PC_1.png";
import MINI_PRISMA from "@/assets/productos/niveles/MINI_PRISMA/mp_1.png";
import SL7 from "@/assets/productos/gps/GNSS_RTK_SL7/sl_71.png";



export const productosArray = [
  {
    slug: "m4-l3",
    nombre: "Matrice 400 + ZENMUSE L3",
    categoria: "Drones",
    imagen: M4_L3,
    galeria: [M4_L3, M4_L3],
    descripcion: "Plataforma aérea empresarial con sensor LiDAR para levantamientos topográficos de alta precisión." +
    " El Matrice 400 ofrece hasta 59 min de vuelo (según la carga útil), 6 kg de capacidad de carga, protección IP55 y " +
    "detección de obstáculos con LiDAR rotativo y radar mmWave. La Zenmuse L3 integra LiDAR de largo alcance (hasta 400 m) y " +
    "doble cámara RGB de 100 MP con obturador mecánico. Precisión de nube de puntos de 3 cm vertical y 4 cm horizontal a 120 m " + 
    "de altura.",
    specs: [
      { label: "Precisión", valor: "..." },
      { label: "Alcance", valor: "..." },
    ],
  },
  {
    slug: "slt-12",
    nombre: "SLT 12",
    categoria: "Estaciones",
    imagen: SLT12,
    galeria: [ SLT12, SLT12],
    descripcion: "Estación total Android con doble pantalla táctil (5.5'') y cámara integrada de 8 MP. " + 
    "Replanteo visual guiado por imagen y replanteo CAD en un clic, con software ST-Surv. Medición sin prisma hasta 1,000 m y " +
    "con prisma hasta 5–6 km. Compensador de doble eje y 16 GB de memoria. Ideal para topografía, construcción, minería y " +  
    "obra civil.",
    specs: [
      { label: "Precisión", valor: "..." },
      { label: "Alcance", valor: "..." },
    ],
  },
  {
    slug: "slt-10",
    nombre: "SLT 10",
    categoria: "Estaciones",
    imagen: SLT10,
    galeria: [ SLT10, SLT10],
    descripcion: "Estación total de largo alcance con pantalla a color de alto brillo (2.8''), legible bajo sol intenso. " + 
    "Alcance sin prisma de hasta 1,000 m y con prisma de hasta 5,000 m (6,000 m con prismas combinados). " + 
    "Compensador de doble eje, Bluetooth, Wi-Fi y USB-C, hasta 36 horas de autonomía y protección IP65. Opera de -20 °C a 50 °C. " +
    "Equipo robusto para construcción, minería y túneles.",
    specs: [
      { label: "Precisión", valor: "..." },
      { label: "Alcance", valor: "..." },
    ],
  },
  {
    slug: "gnss-rtk-eyr",
    nombre: "GNSS RTK EYR",
    categoria: "GPS",
    imagen: GNSS_RTK_EYR,
    galeria: [GNSS_RTK_EYR, GNSS_RTK_EYR],
    descripcion: "Receptor GNSS RTK compacto (0.97 kg) con doble cámara: una de 5 MP para medir puntos a distancia (2–15 m) " +
    "sin contacto, y otra de 2 MP para replanteo con realidad aumentada. IMU integrada para medición inclinada hasta 60°, " + 
    "con error menor a 2.5 cm. Radio UHF integrada con alcance típico de 7 km y seguimiento de todas las constelaciones " + 
    "(1,408 canales). Precisión de 2–4 cm en levantamiento por imagen.",
    specs: [
      { label: "Precisión", valor: "..." },
      { label: "Alcance", valor: "..." },
    ],
  },
  {
    slug: "sl9-rtk-slam",
    nombre: "SL9 RTK SLAM",
    categoria: "GPS",
    imagen: SL9,
    galeria: [SL9, SL9],
    descripcion: "Equipo portátil que combina GNSS RTK con escaneo SLAM, para medir en interiores, bajo vegetación densa o " +
    "puentes donde el GPS falla. Cambia automáticamente entre RTK y SLAM, y mantiene un único sistema de coordenadas sin puntos " +
    "de control ni cierre de lazo. Alcance de escaneo de hasta 70 m, medición por imagen con precisión de 2–5 cm a 15 m y cálculo" +
    " de volúmenes en tiempo real. Pesa 1.68 kg y trabaja con el software Satsurv (Android).",
    specs: [
      { label: "Precisión", valor: "..." },
      { label: "Alcance", valor: "..." },
    ],
  },
{
    slug: "prisma-sencillo",
    nombre: "Prisma Sencillo",
    categoria: "Niveles",
    imagen: PRISMA_SENCILLO,
    galeria: [PRISMA_SENCILLO, PRISMA_SENCILLO],
    descripcion: "Basculante, base metalica con funda, prisma sencillo de alta precisión...",

    specs: [
      { label: "Precisión", valor: "..." },
      { label: "Alcance", valor: "..." },
    ],
  },
  {
    slug: "sistema-completo",
    nombre: "Sistema Completo",
    categoria: "Niveles",
    imagen: PRISMA_COMPLETO,
    galeria: [PRISMA_COMPLETO, PRISMA_COMPLETO],
    descripcion: "Sistema completo de prisma, base nivelante, adaptador con plomada óptica y maletín de transporte",
    specs: [
      { label: "Precisión", valor: "..." },
      { label: "Alcance", valor: "..." },
    ],
  },
  {
    slug: "mini-prisma",
    nombre: "Mini Prisma",
    categoria: "Niveles",
    imagen: MINI_PRISMA,
    galeria: [MINI_PRISMA, MINI_PRISMA],
    descripcion: "Mini Prisma con mini baliza, nivel de alta precisión...",
    specs: [
      { label: "Precisión", valor: "..." },
      { label: "Alcance", valor: "..." },
    ],
  },
  {
    slug: "sl-7",
    nombre: "SL7",
    categoria: "Niveles",
    imagen: SL7,
    galeria: [SL7, SL7],
    descripcion: "Receptor GNSS RTK ligero (750 g) con hasta 24 horas de autonomía por carga. Cámara HD de grado starlight para " +
    "replanteo visual con realidad aumentada. IMU de 200 Hz que calibra la inclinación automáticamente al encenderse, sin esperar " +
    "solución fija. Antena propia con alta capacidad de rastreo y resistencia a interferencias. " +
    "Práctico para jornadas largas en campo.",
    specs: [
      { label: "Precisión", valor: "..." },
      { label: "Alcance", valor: "..." },
    ],
  },
];