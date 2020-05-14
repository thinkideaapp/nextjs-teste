import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';

const PostItem = React.forwardRef(({ post, ...props }, ref) => (
	<ListItem ref={ref} {...props} alignItems="flex-start">
		<ListItemAvatar>
			<Avatar alt="Remy Sharp" />
		</ListItemAvatar>
		<ListItemText
			primary={post.title}
			secondary={
				<React.Fragment>
					<Typography component="span" variant="body2" color="textPrimary">
						{post.body}
					</Typography>
				</React.Fragment>
			}
		/>
	</ListItem>
));

PostItem.displayName = 'PostItem';

export default PostItem;
