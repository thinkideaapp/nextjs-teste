import React from 'react';
import { Creators as TodoDetailsCreators } from 'appStore/ducks/todo/details';
import Layout from 'components/Layout';
import { useSelector } from 'react-redux';
import TodoItem from 'components/pages/todo/TodoItem/TodoItem';

export default function Details() {
	const { data: todoDetailsData, loading } = useSelector((state) => state.todo.details);

	if (loading) {
		return <div>Carregando</div>;
	}

	return (
		<Layout maxWidth={false}>
			<TodoItem todo={todoDetailsData} />
		</Layout>
	);
}

Details.getInitialProps = async ({ store, query }) => {
	store.dispatch(TodoDetailsCreators.getRequest(query.id));
};
