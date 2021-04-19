import React from 'react';
import PropTypes from 'prop-types';
import recentPosts from '../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json';

/**
 * Recent Posts Component
 * @param {object} props Component props
 * @param {number} props.posts Number of posts to show (1 = only most recent)
 */

function RecentPosts(props) {
  return (
    <>
      <div className="col col--6">
        <header className="hero__title">Recent Post</header>
        <ul>
          {recentPosts.items.slice(0, props.posts).map((item, index) => (
            <li key={index}>
              <a href={`${item.permalink}`}>{item.title}</a>{' '}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

RecentPosts.propTypes = {
  posts: PropTypes.number.isRequired,
};

export default RecentPosts;
