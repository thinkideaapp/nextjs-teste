import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import Link from 'next/link';

const PostItem = React.forwardRef(({ post, ...props }, ref) => (
  <Link href="/posts/comments[id]" as={`/posts/comments/${post.id}`} passHref>
    <ListItem ref={ref} {...props} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText
        primary={post.title}
        secondary={
          <React.Fragment>
            <Typography component={'div'} variant="body2" color="textPrimary">
              {`Mensagem: ${post.body}`}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  </Link>
));

PostItem.displayName = 'PostItem';

export default PostItem;
