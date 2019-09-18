import React, { useState } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <Menu attached='top' tabular>
      <Menu.Item
        name='homepage'
        active={activeItem === 'homepage'}
        onClick={handleItemClick}
      >
        <Icon name='home' size='large'/>Home Page
      </Menu.Item>

      <Menu.Item
        name='characters'
        active={activeItem === 'characters'}
        onClick={handleItemClick}
      >
        <Icon name='users' size='large' />Characters
      </Menu.Item>

      <Menu.Item
        name='locations'
        active={activeItem === 'locations'}
        onClick={handleItemClick}
      >
        <Icon name='map outline' size='large' />Locations
      </Menu.Item>

      <Menu.Item
        name='episodes'
        active={activeItem === 'episodes'}
        onClick={handleItemClick}
      >
        <Icon name='video camera' size='large' />Episodes
      </Menu.Item>
    </Menu>
  )
};
