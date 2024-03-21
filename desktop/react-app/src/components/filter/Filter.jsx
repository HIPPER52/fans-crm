import * as React from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SortIcon from "@mui/icons-material/Sort";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import "./filter.css";

const sortOptions = ["Newest", "Oldest"];

export default function Filter() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const sortType = params.get("sort") ? params.get("sort") : 0;

  const [openFilter, setOpenFilter] = useState(false);
  const [sortEl, setSortEl] = React.useState(null);
  const [selectedSortIndex, setSelectedSortIndex] = React.useState(sortType);
  const open = Boolean(sortEl);
  const history = useHistory();

  const handleClickSortListItem = (event) => {
    setSortEl(event.currentTarget);
  };

  const handleClickFilterMenu = () => {
    setOpenFilter(!openFilter);
  };

  const handleMenuSortItemClick = (event, index) => {
    const path = `/?sort=${index}`;
    history.push(path);
    history.go(0);
    setSelectedSortIndex(index);
    setSortEl(null);
  };

  const handleSortClose = () => {
    setSortEl(null);
  };

  return (
    <div className="icon">
      <IconButton
        color="primary"
        title="filter"
        aria-label="filter"
        onClick={handleClickFilterMenu}
      >
        <SortIcon />
      </IconButton>

      <Collapse in={openFilter} timeout="auto" unmountOnExit>
        <div className="filterMenu">
          <div className="sortMenu">
            <ListItem
              button
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickSortListItem}
            >
              <ListItemText
                primary="Sort"
                secondary={sortOptions[selectedSortIndex]}
              />
            </ListItem>
            <Menu
              id="lock-menu"
              anchorEl={sortEl}
              open={open}
              onClose={handleSortClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {sortOptions.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedSortIndex}
                  onClick={(event) => handleMenuSortItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
