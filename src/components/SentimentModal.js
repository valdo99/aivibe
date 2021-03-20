import React from 'react';

export default function SentimentModal({ content, closeModal }) {
  return (
    <>
      <div className="modal display-block">
        <button className="close" onClick={closeModal}>
          X
        </button>
        <p>{content}</p>
      </div>
    </>
  );
}
