import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

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
      <NavLink to="/home">
        <Icon name='home' size='large'/>Home Page
      </NavLink>
      </Menu.Item>

      <Menu.Item
        name='characters'
        active={activeItem === 'characters'}
        onClick={handleItemClick}
      >
      <NavLink to="/characters">
        <Icon name='users' size='large' />Characters
      </NavLink>
      </Menu.Item>

      <Menu.Item
        name='locations'
        active={activeItem === 'locations'}
        onClick={handleItemClick}
      >
      <NavLink to="/locations">
        <Icon name='map outline' size='large' />Locations
      </NavLink>
      </Menu.Item>

      <Menu.Item
        name='episodes'
        active={activeItem === 'episodes'}
        onClick={handleItemClick}
      >
      <NavLink to="/episodes">
        <Icon name='video camera' size='large' />Episodes
      </NavLink>
      </Menu.Item>
    </Menu>
  )
};
