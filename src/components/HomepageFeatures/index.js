import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Use Custom Builds',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Dungeons can be created within your own builds. Build your dream dungeon.
        Create spawners, lootchests, and command regions. Place these structures
        inside your dungeon. Release it!
      </>
    ),
  },
  {
    title: 'Pregenerate Dungeons',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Create instanced dungeons that allow players to start the same
        dungeon without seeing each other. Pregenerate these dungeons
        to avoid wait times.
      </>
    ),
  },
  {
    title: 'Seamless Entry',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Allow players to simply walk into a dungeon to begin the experience.
        No menus. No teleportations. Players that enter seamless dungeons
        get right into the action you create.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
