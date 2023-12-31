import FactBox from '../FactBox/FactBox';

const FactBoxContainer = ({ stats }) => {
  return (
    <div className="fact-box">
      {Object.entries(stats).map(([name, value]) => (
        <FactBox name={name} value={value} key={value} />
      ))}
    </div>
  );
};

export default FactBoxContainer;
