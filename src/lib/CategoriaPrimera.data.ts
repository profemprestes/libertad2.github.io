/**
 * @file CategoriaPrimera.data.ts
 * @description Contains the data for the Primera (First Team) category players of Club Atlético Libertad.
 * Each player object includes their name, position, Instagram username, and date of birth.
 * This data is used to populate the Primera roster display on the website.
 * Player positions include: Arquero, Defensa, Volante, Delantero.
 * The data is structured as an array of PrimeraPlayer objects.
 */
import type { PrimeraPlayer } from '@/types';

export const categoriaPrimera: PrimeraPlayer[] = [
  { nombre: "Nicolás Suárez", posicion: "Arquero", instagram: "nicosuarez1", fechaNacimiento: "02/01/2001" },
  { nombre: "Martín Cardozo", posicion: "Defensa", instagram: "martincardozo", fechaNacimiento: "15/02/2000" },
  { nombre: "Diego Ramírez", posicion: "Defensa", instagram: "diego.ramirez", fechaNacimiento: "03/03/1999" },
  { nombre: "Julián Acosta", posicion: "Defensa", instagram: "julianacosta", fechaNacimiento: "25/04/1998" },
  { nombre: "Carlos Morales", posicion: "Defensa", instagram: "carlosmorales", fechaNacimiento: "06/05/2001" },
  { nombre: "Rodrigo Pérez", posicion: "Defensa", instagram: "rodriperez", fechaNacimiento: "17/06/2000" },
  { nombre: "Santiago López", posicion: "Volante", instagram: "santi.lopez", fechaNacimiento: "12/07/2001" },
  { nombre: "Bruno Ferreira", posicion: "Volante", instagram: "brunoferreira", fechaNacimiento: "29/08/1999" },
  { nombre: "Tomás Herrera", posicion: "Volante", instagram: "tomasherrera10", fechaNacimiento: "04/09/2000" },
  { nombre: "Sebastián Ruiz", posicion: "Volante", instagram: "sebastianruiz", fechaNacimiento: "21/10/2001" },
  { nombre: "Cristian Lemos", posicion: "Volante", instagram: "cristianlemos", fechaNacimiento: "11/11/1998" },
  { nombre: "Matías De León", posicion: "Volante", instagram: "matiasdeleon", fechaNacimiento: "30/12/2001" },
  { nombre: "Franco González", posicion: "Delantero", instagram: "francogonzalez9", fechaNacimiento: "07/01/2001" },
  { nombre: "Alejandro Rodríguez", posicion: "Delantero", instagram: "alejrodz", fechaNacimiento: "19/02/1999" },
  { nombre: "Ignacio Cabrera", posicion: "Delantero", instagram: "nachocabrera", fechaNacimiento: "01/03/1998" },
  { nombre: "Luciano Costa", posicion: "Delantero", instagram: "lucianocosta", fechaNacimiento: "22/04/1999" },
  { nombre: "Fernando Silva", posicion: "Delantero", instagram: "fersilva", fechaNacimiento: "05/05/2000" },
  { nombre: "Gonzalo Núñez", posicion: "Arquero", instagram: "gonuniez", fechaNacimiento: "14/06/1999" },
  { nombre: "Emiliano Méndez", posicion: "Defensa", instagram: "emimendez", fechaNacimiento: "08/07/1998" },
  { nombre: "Adrián Torres", posicion: "Volante", instagram: "adriantorres", fechaNacimiento: "10/08/1999" },
  { nombre: "Damián Pereira", posicion: "Delantero", instagram: "dami.pereira", fechaNacimiento: "13/09/1998" },
  { nombre: "Lucas Ramos", posicion: "Defensa", instagram: "lucasramos", fechaNacimiento: "26/10/2000" }
];
