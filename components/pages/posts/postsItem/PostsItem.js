import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@material-ui/core';

const PostsItem = React.forwardRef(({ posts, ...props }, ref) => (
  <ListItem ref={ref} {...props} alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </ListItemAvatar>
    <ListItemText

      primary={posts.title}
      secondary={
        <React.Fragment>
          <Typography component="span" variant="body2" color="textPrimary">
            {`Completo: ${posts.body}`}
          </Typography>
        </React.Fragment>

      }
    />
  </ListItem>
));

PostsItem.displayName = 'postsItem';

export default PostsItem;
