import React from 'react';
import { Creators as postsListCreators } from 'appStore/ducks/posts/list';
import Layout from 'components/Layout';
import { List, Divider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PostsItem from 'components/pages/posts/postsItem/PostsItem';
import Router from 'next/router';

export default function Index() {
  const { data: postsListData } = useSelector(state => state.posts.list);

  const onClickpostsItem = posts => () => {
    const { id } = posts;
    Router.push('/posts/[id]', `/posts/${id}`);
    // Prox -> Navegar para a tela
  };

  return (
    <Layout maxWidth={false}>
      <List>
        {postsListData.map(posts => (
          <React.Fragment key={posts.id}>
            {/* <Link href="/details/[id]" as={`details/${posts.id}`} passHref> */}
            <PostsItem onClick={onClickpostsItem(posts)} posts={posts} />
            {/* </Link> */}
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Layout>
  );
}

Index.getInitialProps = async ({ store }) => {
  store.dispatch(postsListCreators.getRequest());
};
