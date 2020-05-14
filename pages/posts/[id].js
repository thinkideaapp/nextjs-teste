import React from 'react';
import { Creators as PostDetailsCreators } from 'appStore/ducks/post/details';
import Layout from 'components/Layout';
import { useSelector } from 'react-redux';
import PostItem from 'components/pages/post/PostItem/PostItem';

export default function Details() {
  const { data: postDetailsData, loading } = useSelector(
    state => state.post.details
  );

  const loadingStyle = {
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    fontSize: '30px',
    marginTop: '30px',
  };

  if (loading) {
    return <div style={loadingStyle}>Carregando Post</div>;
  }

  return (
    <Layout maxWidth={false}>
      <PostItem post={postDetailsData} />
    </Layout>
  );
}

Details.getInitialProps = async ({ store, query }) => {
  store.dispatch(PostDetailsCreators.getRequest(query.id));
};
