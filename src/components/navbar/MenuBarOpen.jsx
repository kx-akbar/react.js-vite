import React, { useState } from "react";
import {
  ListItem,
  ListName,
  Arrow,
  UlListItem,
  ItemIcons,
} from "./NavbarStyled.js";

// Menu bar Component
function MenuBarOpen({ title, data, iconClass }) {
  const [open, setOpen] = useState(false);

  const handleClick = function () {
    setOpen(!open);
  };

  return (
    <div>
      <div>
        <ListItem
          onClick={handleClick}
          style={
            open
              ? { background: "rgb(37, 62, 95)" }
              : { background: "transparent" }
          }
        >
          <ItemIcons src={iconClass}></ItemIcons>
          <ListName
            style={
              open && data.length > 0
                ? {
                    color: "rgb(24, 144, 255)",
                  }
                : { color: "rgb(248, 250, 252)" }
            }
          >
            {title}
          </ListName>
          {data.length > 0 ? (
            <Arrow
              className="fa-solid fa-chevron-right"
              style={
                open
                  ? { transform: "rotate(91.5deg)" }
                  : { transform: "rotate(0)" }
              }
            ></Arrow>
          ) : null}
        </ListItem>
        {/* ----------------------------------------------------- */}
        {open && (
          <div>
            {data && data.length > 0 ? (
              <ul type="none">
                {data.map((val, index) => {
                  return <UlListItem key={index}>{val}</UlListItem>;
                })}
              </ul>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuBarOpen;
