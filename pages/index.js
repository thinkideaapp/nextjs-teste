import React from 'react';
import { Creators as TodoListCreators } from 'appStore/ducks/todo/list';
import { Creators as PostListCreators } from 'appStore/ducks/post/list';
import { useSelector } from 'react-redux';
import TodoItem from 'components/pages/todo/TodoItem/TodoItem';
import Router from 'next/router';
import PostItem from 'components/pages/post/PostItem/PostItem';
import Link from 'next/link';
import Layout from 'components/Layout';
import {
  List,
  Divider,
  AppBar,
  Tab,
  Box,
  Typography,
  Tabs,
} from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Index() {
  const { data: todoListData } = useSelector(state => state.todo.list);
  const { data: postListData } = useSelector(state => state.post.list);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onClickTodoItem = todo => () => {
    const { id } = todo;
    Router.push('/todos/[id]', `/todos/${id}`);
    // Prox -> Navegar para a tela
  };

  return (
    <Layout maxWidth={false}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="simple tabs example">
          <Tab label="Todos" {...a11yProps(0)} />
          <Tab label="Posts" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <List>
          {todoListData.map(todo => (
            <React.Fragment key={todo.id}>
              <TodoItem onClick={onClickTodoItem(todo)} todo={todo} />
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <List>
          {postListData.map(post => (
            <React.Fragment key={post.id}>
              <Link href="/posts/[id]" as={`posts/${post.id}`} passHref>
                <PostItem post={post} />
              </Link>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </TabPanel>
    </Layout>
  );
}

Index.getInitialProps = async ({ store }) => {
  store.dispatch(PostListCreators.getRequest());
  store.dispatch(TodoListCreators.getRequest());
};
