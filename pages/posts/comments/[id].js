import React from 'react';
import { Creators as PostCommentsCreators } from 'appStore/ducks/post/comments';
import Layout from 'components/Layout';
import { useSelector } from 'react-redux';
import PostComment from 'components/pages/post/PostComment/PostComment';
import { List, Divider } from '@material-ui/core';

export default function Details() {
  const { data: postCommentData, loading } = useSelector(
    state => state.post.comments
  );

  const loadingStyle = {
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    fontSize: '30px',
    marginTop: '30px',
  };

  if (loading) {
    return <div style={loadingStyle}>Carregando Comentários</div>;
  }

  return (
    <Layout maxWidth={false}>
      <List>
        {postCommentData.map(comment => (
          <React.Fragment key={comment.id}>
            <PostComment comment={comment} />
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Layout>
  );
}

Details.getInitialProps = async ({ store, query }) => {
  store.dispatch(PostCommentsCreators.getRequest(query.id));
};
