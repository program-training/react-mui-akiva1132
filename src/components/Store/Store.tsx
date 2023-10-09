import { useState } from "react";
import {  IconButton, styled, Badge, BadgeProps  } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 20,
      top: 18,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export function Store() {

  return (
    <div id="main">
      <IconButton aria-label="cart">
  <StyledBadge badgeContent={4} color="info">
    <ShoppingCartIcon />
  </StyledBadge>
</IconButton>
    </div>
  );
}
