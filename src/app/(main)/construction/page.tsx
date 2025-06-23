import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  // Simulación de lógica de redirección
  // En el futuro aquí se implementará la lógica para determinar si el usuario
  // debe ir a construction o members basado en los datos de la base de datos
  
  // Por ahora, redirigimos directamente a construction/home
  return redirect("/construction/home");
};

export default Page;