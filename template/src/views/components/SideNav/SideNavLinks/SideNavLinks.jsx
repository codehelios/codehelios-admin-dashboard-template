import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import List from "@material-ui/core/List";
import { HomeRounded, Image, People } from "@material-ui/icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideNavLinks extends Component {
  getListItems = (classes, item, index, currentTab) => {
    return (
      <ListItem
        button
        className={classes.listItem}
        selected={currentTab === index}
        onClick={() => this.props.onClick(index)}
      >
        <ListItemIcon style={{ color: "#f9f9f9" }}>{item.img}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>
    );
  };

  render() {
    const { classes, currentTab } = this.props;
    return (
      <div>
        <List>
          {[
            { text: "Link1", img: <HomeRounded />, url: "/" },
            { text: "Link2", img: <Image />, url: "/" },
            { text: "Link3", img: <People />, url: "/" },
          ].map((item, index) => (
            <Link
              to={item.url}
              key={item.text}
              style={{ textDecoration: "none" }}
            >
              {this.getListItems(classes, item, index, currentTab)}
            </Link>
          ))}
        </List>
      </div>
    );
  }
}

export default SideNavLinks;
