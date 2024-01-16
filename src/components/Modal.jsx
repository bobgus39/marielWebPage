import "./Modal.css";

function Modal(data) {
  console.log(data.tittle);
  return (
    <div className="modal">
      <img className="imgModal" src={data.img} alt="modal img" />
      <h3>{data.tittle}</h3>
      <p>{data.value}</p>
    </div>
  );
}

export default Modal;
