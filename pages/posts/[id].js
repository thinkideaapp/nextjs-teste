import React from 'react';
import { Creators as postsDetailsCreators } from 'appStore/ducks/posts/details';
import Layout from 'components/Layout';
import { useSelector } from 'react-redux';
import PostsItem from 'components/pages/posts/postsItem/PostsItem';

export default function Details() {
  const { data: postsDetailsData, loading } = useSelector(
    state => state.posts.details
  );

  if (loading) {
    return <div>Carregando</div>;
  }

  return (
    <Layout maxWidth={false}>
      <PostsItem posts={postsDetailsData} />
    </Layout>
  );
}

Details.getInitialProps = async ({ store, query }) => {
  store.dispatch(postsDetailsCreators.getRequest(query.id));
};
