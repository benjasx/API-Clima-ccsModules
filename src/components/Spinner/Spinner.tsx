import './Spinner.css';

export default function Spinner() {
  return (
    <div className="spinnerContainer">
      <div className="skChase">
        <div className="skChaseDot"></div>
        <div className="skChaseDot"></div>
        <div className="skChaseDot"></div>
        <div className="skChaseDot"></div>
        <div className="skChaseDot"></div>
        <div className="skChaseDot"></div>
      </div>
    </div>
  );
}
