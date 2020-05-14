import React from 'react';

// IMPORT CREATORS
import { Creators as TodoListCreators } from 'appStore/ducks/todo/list';
import { Creators as PostListCreators } from 'appStore/ducks/post/list';

//
import Layout from 'components/Layout';
import { List, Divider, BottomNavigation, BottomNavigationAction, Link } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { Assignment } from '@material-ui/icons';

// COMPONENTS
import TodoItem from 'components/pages/todo/TodoItem/TodoItem';
import PostItem from 'components/pages/post/PostItem/PostItem';

export default function Index() {
	const { data: todoListData } = useSelector((state) => state.todo.list);
	const { data: postListData } = useSelector((state) => state.post.list);
	const [ value, setValue ] = React.useState(0);

	const onClickTodoItem = (todo) => () => {
		const { id } = todo;
		Router.push('/todos/[id]', `/todos/${id}`);
	};

	const onClickPostItem = (post) => () => {
		const { id } = post;
		Router.push('/posts/[id]', `/posts/${id}`);
	};

	const PostList = () => {
		return (
			<List>
				{postListData.map((post) => (
					<React.Fragment key={post.id}>
						<PostItem onClick={onClickPostItem(post)} post={post} />
						<Divider variant="inset" component="li" />
					</React.Fragment>
				))}
			</List>
		);
	};

	const TodoList = () => {
		return (
			<List>
				{todoListData.map((todo) => (
					<React.Fragment key={todo.id}>
						<TodoItem onClick={onClickTodoItem(todo)} todo={todo} />
						<Divider variant="inset" component="li" />
					</React.Fragment>
				))}
			</List>
		);
	};

	return (
		<Layout maxWidth={false}>
			<BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				showLabels
			>
				<BottomNavigationAction label="Todos" icon={<Assignment />} />
				<BottomNavigationAction label="Posts" icon={<Assignment />} />
			</BottomNavigation>

			{value === 1 ? <PostList /> : <TodoList />}
		</Layout>
	);
}

Index.getInitialProps = async ({ store }) => {
	store.dispatch(TodoListCreators.getRequest());
	store.dispatch(PostListCreators.getRequest());
};
