export default function helper(){
  let months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let fechaHoy = new Date();
  let month = fechaHoy.getMonth();
  let recorte = parseInt(month) + 1;
  months.length = recorte;
  return months;
}
