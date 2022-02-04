import React, { useContext } from 'react';
import { deleteItem } from '../store/Actions';
import { DataContext } from '../store/GlobalState';

const Modal = () => {
  const { state, dispatch } = useContext(DataContext);
  const { modal } = state;

  const handleSubmit = () => {
    dispatch(deleteItem(modal.data, modal.id, 'ADD_CART'));
    dispatch({ type: 'ADD_MODAL', payload: {} });
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-capitalize" id="exampleModalLabel">
              {modal.title}
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">Вы действительно хотите удалить этот продукт?</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleSubmit}>
              Да
            </button>
            <button type="button" className="btn btn-primary" data-dismiss="modal">
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
