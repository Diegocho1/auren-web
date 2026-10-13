import M4_L3 from "@/assets/productos/drones/MATRICE_400_L3/m4_l31.webp";
import SLT12 from "@/assets/productos/estaciones/SLT_12/slt_121.webp";
import SLT10 from "@/assets/productos/estaciones/SLT_10/slt_101.webp";
import GNSS_RTK_EYR from "@/assets/productos/gps/GNSS_RTK_EYR/GNSS_RTK_EYR1.webp";
import SL9 from "@/assets/productos/gps/SL_9/sl_91.webp";
import PRISMA_SENCILLO from "@/assets/productos/niveles/PRISMA_SENCILLO/ps_1.png";
import PRISMA_COMPLETO from "@/assets/productos/niveles/PRISMA_COMPLETO/pc_1.png";
import MINI_PRISMA from "@/assets/productos/niveles/MINI_PRISMA/mp_1.png";
import SL7 from "@/assets/productos/gps/GNSS_RTK_SL7/sl_71.png";



export const productosArray = [
  {
    slug: "m4-l3",
    nombre: "M4 L3",
    categoria: "Drones",
    imagen: M4_L3,
    galeria: [M4_L3, M4_L3],
    descripcion: "Drone de alta gama para aplicaciones profesionales...",
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
    descripcion: "Estación total de alta precisión...",
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
    descripcion: "Estación total de alta precisión...",
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
    descripcion: "Receptor GNSS RTK de alta precisión...",
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
    descripcion: "Escáner láser SLAM con RTK...",
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
    descripcion: "Siistema completo de prisma, base nivelante, adaptador con plomada opti",
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
    descripcion: "Nivel de alta precisión...",
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
    descripcion: "Nivel de alta precisión...",
    specs: [
      { label: "Precisión", valor: "..." },
      { label: "Alcance", valor: "..." },
    ],
  },
];