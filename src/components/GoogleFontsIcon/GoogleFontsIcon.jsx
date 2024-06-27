import React from "react";

class GoogleFontsIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { iconName } = this.props;

    return (
      <div className="{iconName}-icon">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <span className="material-symbols-outlined icon">{iconName}</span>
      </div>
    );
  }
}

export default GoogleFontsIcon;
