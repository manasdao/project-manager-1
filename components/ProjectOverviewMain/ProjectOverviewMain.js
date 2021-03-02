import React, { useState } from "react";
import styles from "./ProjectOverviewMain.module.scss";
import DueDate from "../DueDate/DueDate";
import Shortcuts from "../Shortcuts/Shortcuts";
import ProgressBar from "../ProgressBar/ProgressBar";
import Todos from "../Todos/Todos";

export default function ProjectOverviewMain() {
  const [shortcuts] = useState([
    {
      title: "Firebase",
      url:
        "https://console.firebase.google.com/project/project-manager-dd0f2/overview",
      image: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    },
    {
      title: "Firebase",
      url:
        "https://console.firebase.google.com/project/project-manager-dd0f2/overview",
      image: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    },
  ]);
  const [todos] = useState([
    { description: "Complete astronomia" },
    { description: "Complete login" },
    { description: "Update leveling" },
  ]);
  return (
    <section className={styles.projectCard}>
      <article className={styles.leftBar}>
        <header className={styles.cardHeader}>
          <h2>
            Astronomia<span className={styles.tag}>#Programming</span>
          </h2>
          <DueDate days={5} />
        </header>
        <Shortcuts shortcuts={shortcuts} />
        <ProgressBar storiesDone={20} totalStories={40} />
      </article>
      <article className={styles.rightBar}>
        <header className={styles.rightBarHeader}>
          <h3>STORIES</h3>
        </header>
        <Todos todos={todos} />
      </article>
    </section>
  );
}
