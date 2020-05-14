import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@material-ui/core';

const TodoItem = React.forwardRef(({ todo, ...props }, ref) => (
  <ListItem ref={ref} {...props} alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </ListItemAvatar>
    <ListItemText
      primary={todo.title}
      secondary={
        <React.Fragment>
          <Typography component="span" variant="body2" color="textPrimary">
            {`Completo: ${todo.completed}`}
          </Typography>
        </React.Fragment>
      }
    />
  </ListItem>
));

TodoItem.displayName = 'TodoItem';

export default TodoItem;
