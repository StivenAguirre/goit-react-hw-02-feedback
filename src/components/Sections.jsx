import React from "react";
import styles from "../diagram.module.css"

const Section = () => {
  return (
    <div>
        <h1 className={styles["title"]}>EXPRESS CAFE</h1>
        <p className={styles["text"]}>
        Express Cafe valora las opiniones de nuestros clientes por lo que
        <br></br> nos tomamos el espacio para recibir su opinión respecto al Servicio que le hemos
        <br></br> prestado calificándolo en los siguientes tres aspectos: Buena, Neutra o Mala.
        </p>
    </div>
  );
};

export default Section;