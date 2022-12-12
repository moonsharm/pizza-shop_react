import React from "react";

import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>Ничего не найдено</h1>
      <p className={styles.description}>К сoжалению тут пусто</p>
    </div>
  );
}

export default NotFoundBlock;
