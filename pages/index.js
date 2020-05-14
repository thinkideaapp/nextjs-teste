import React from 'react';
import { Creators as TodoListCreators } from 'appStore/ducks/todo/list';
import Layout from 'components/Layout';
import { List, Divider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import TodoItem from 'components/pages/todo/TodoItem/TodoItem';
import Router from 'next/router';

export default function Index() {
  const { data: todoListData } = useSelector(state => state.todo.list);

  const onClickTodoItem = todo => () => {
    const { id } = todo;
    Router.push('/details/[id]', `/details/${id}`);
    // Prox -> Navegar para a tela
  };

  return (
    <Layout maxWidth={false}>
      <List>
        {todoListData.map(todo => (
          <React.Fragment key={todo.id}>
            {/* <Link href="/details/[id]" as={`details/${todo.id}`} passHref> */}
            <TodoItem onClick={onClickTodoItem(todo)} todo={todo} />
            {/* </Link> */}
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Layout>
  );
}

Index.getInitialProps = async ({ store }) => {
  store.dispatch(TodoListCreators.getRequest());
};
