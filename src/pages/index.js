import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Systems Programming',
    imageUrl: 'img/systems.svg',
    description: (
      <>
        Unix/Linux environments, with a goal to achieve efficient use of
        available resources.
      </>
    ),
  },
  {
    title: 'Game Development',
    imageUrl: 'img/games.svg',
    description: (
      <>
        2D games using libraries. But also explore open source game engines such
        such as Godette(Godot), and Unreal.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

Feature.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="Portfolio, Blog, and Docs all in one place!">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('about/')}
            >
              About Me
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
