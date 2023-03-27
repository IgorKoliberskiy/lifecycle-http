import Clock from "./Clock";

function Clocks({clocks, onHandleDelete}) {

  return (
    <div className="clocks-container">
      {clocks.map((el) => <Clock 
        handleDelete={onHandleDelete}
        key={el.id}
        offset={el.offset}
        id={el.id}
        name={el.name}
      ></Clock>)}
    </div>
  );
}
  
  export default Clocks;