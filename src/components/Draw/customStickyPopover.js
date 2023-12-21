import React, { useState } from 'react';
import { Popover } from 'react-bootstrap';
import { BsCCircle, BsSquare, BsStickiesFill } from 'react-icons/bs';
import { DrawingColors } from "../../utils/DrawingColor";

const CustomStickyPopover = ({ setSelectedColor, handleAddNote,setAddingNote ,setSelectedShape,selectedShape }) => {

  // const [selectedShape, setSelectedShape] = useState('square');
  return (
    <Popover id="popover-basic">
      <Popover.Body>
        <div style={{ display: 'flex' }}>
          {DrawingColors.map((color) => (
            <div
              key={color.color}
              onClick={() => {
                setSelectedColor(color.color);
                setAddingNote(true); 
              }
              }
              style={{
                backgroundColor: color.color,
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                margin: '6px',
                cursor: 'pointer',
                boxShadow: selectedShape === color.color ? '0 0 0 2px #000' : 'none',
              }}
              title={color.title}
            ></div>
          ))}
        </div>
        <div style={{ display: 'flex' }}>
          <div
            onClick={() => {
              handleAddNote(200, 300, 'Rectangle');
              setSelectedShape('Rectangle');
            }}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: selectedShape === 'Rectangle' ? DrawingColors.color : 'transparent',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BsStickiesFill style={{ cursor: 'pointer' }} />
          </div>
          <div
            onClick={() => {
              // handleAddNote(200, 200, 'circle');
              setSelectedShape('circle');
            }}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: selectedShape === 'circle' ? DrawingColors.color : 'transparent',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BsCCircle style={{ cursor: 'pointer' }} />
          </div>
          <div
            onClick={() => {
              // handleAddNote(200, 200, 'square');
              setSelectedShape('square');
            }}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: selectedShape === 'square' ? DrawingColors.color : 'transparent',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BsSquare style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );
};

export default CustomStickyPopover;