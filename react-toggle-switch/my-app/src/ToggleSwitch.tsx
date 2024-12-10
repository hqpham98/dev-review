import "./ToggleSwitch.css";

type Props = {
  power: boolean;
  onClick: () => void;
};

export function ToggleSwitch({ power, onClick }: Props) {
  return (
    <div>
      <div className={power ? "button-wrapper on" : "button-wrapper off"}>
        <div
          className={power ? "toggle-button on" : "toggle-button off"}
          onClick={onClick}
        ></div>
      </div>
    </div>
    // <div
    //   onClick={onClick}
    //   className={power ? "toggle-switch is-on" : "toggle-switch"}
    // >
    //   <div className="slider">
    //     <div className="switch"></div>
    //   </div>
    // </div>
  );
}
