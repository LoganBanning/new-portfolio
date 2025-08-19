import React, { useState } from "react";

/** <Tabs> */
export function Tabs({
  children,
  defaultIndex = 0,
  selectedIndex: controlledIndex,
  onSelect,
  ...rest
}) {
  const [uncontrolledIndex, setUncontrolledIndex] = useState(defaultIndex);
  const selectedIndex =
    controlledIndex !== undefined ? controlledIndex : uncontrolledIndex;

  const setIndex = (i) => {
    onSelect?.(i);
    if (controlledIndex === undefined) setUncontrolledIndex(i);
  };

  // Wire up TabList/TabPanel children
  let panelIdx = -1;
  const mapped = React.Children.map(children, (child) => {
    if (!child) return child;
    if (child.type === TabList) {
      return React.cloneElement(child, { selectedIndex, setIndex });
    }
    if (child.type === TabPanel) {
      panelIdx += 1;
      return React.cloneElement(child, { index: panelIdx, selectedIndex });
    }
    return child;
  });

  return (
    <div data-react-tabs="" {...rest}>
      {mapped}
    </div>
  );
}

/** <TabList> */
export function TabList({ children, selectedIndex, setIndex, className = "", ...rest }) {
  let tabIdx = -1;
  const mapped = React.Children.map(children, (child) => {
    if (!child) return child;
    if (child.type === Tab) {
      tabIdx += 1;
      return React.cloneElement(child, {
        index: tabIdx,
        selected: tabIdx === selectedIndex,
        setIndex,
      });
    }
    return child;
  });

  return (
    <div
      role="tablist"
      className={`react-tabs__tab-list ${className}`}
      {...rest}
    >
      {mapped}
    </div>
  );
}

/** <Tab> */
export function Tab({ children, index, selected, setIndex, className = "", ...rest }) {
  return (
    <button
      role="tab"
      aria-selected={selected}
      aria-controls={`rpanel-${index}`}
      id={`rtab-${index}`}
      onClick={() => setIndex(index)}
      className={`react-tabs__tab ${selected ? "react-tabs__tab--selected" : ""} ${className}`}
      {...rest}
      style={{
        cursor: "pointer",
        background: "transparent",
        border: "none",
        padding: "0.5rem 0.75rem",
        borderBottom: selected ? "2px solid currentColor" : "2px solid transparent",
      }}
    >
      {children}
    </button>
  );
}

/** <TabPanel> */
export function TabPanel({ children, index, selectedIndex, className = "", ...rest }) {
  const selected = index === selectedIndex;
  return (
    <div
      role="tabpanel"
      id={`rpanel-${index}`}
      aria-labelledby={`rtab-${index}`}
      className={`react-tabs__tab-panel ${
        selected ? "react-tabs__tab-panel--selected" : ""
      } ${className}`}
      hidden={!selected}
      {...rest}
    >
      {selected ? children : null}
    </div>
  );
}
