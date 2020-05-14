import React from 'react';
import { Creators as PostDetailsCreators } from 'appStore/ducks/post/details';
import Layout from 'components/Layout';
import { useSelector } from 'react-redux';
import PostItem from 'components/pages/post/PostItem/PostItem';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	loading: {
		padding: theme.spacing(20),
		textAlign: 'center'
	}
}));

export default function PostDetails() {
	const classes = useStyles();
	const { data: postDetailsData, loading } = useSelector((state) => state.post.details);

	if (loading) {
		return (
			<Typography className={classes.loading} variant="h3" component="h2">
				Carregando...
			</Typography>
		);
	}

	return (
		<Layout maxWidth={false}>
			<PostItem post={postDetailsData} />
		</Layout>
	);
}

PostDetails.getInitialProps = async ({ store, query }) => {
	store.dispatch(PostDetailsCreators.getRequest(2));
};
