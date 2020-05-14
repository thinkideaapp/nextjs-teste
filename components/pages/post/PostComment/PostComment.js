import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@material-ui/core';

const PostComment = React.forwardRef(({ comment, ...props }, ref) => (
  <ListItem ref={ref} {...props} alignItems="flex-start">
    <ListItemAvatar>
      <Avatar />
    </ListItemAvatar>
    <ListItemText
      primary={comment.name}
      secondary={
        <React.Fragment>
          <Typography component={'div'} variant="body2" color="textPrimary">
            {`Email: ${comment.email}`}
          </Typography>
          <Typography component={'div'} variant="body2" color="textPrimary">
            {`Mensagem: ${comment.body}`}
          </Typography>
        </React.Fragment>
      }
    />
  </ListItem>
));

PostComment.displayName = 'PostComment';

export default PostComment;
