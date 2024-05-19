import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { AiFillEdit } from "react-icons/ai";

export function Draggable({
  bullet,
  moveRow,
  index,
  removeBullet,
  editedBulletId,
  editBulletText,
  setNewBulletText,
}) {
  const { id, bulletText } = bullet;
  const ref = useRef(null);
  const onKeyUp = (e) => {
    if (e.code === "Enter") {
      setNewBulletText(e.target.value, id)
    }
  }

  const [collectedProps, drop] = useDrop({
    accept: "bullet",

    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },

    hover(item, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      moveRow(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [collectedDragProps, drag] = useDrag({
    type: "bullet",
    item: () => ({ id, index }),
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const bgColor = collectedDragProps.isDragging ? "#add1c7" : "#c0ffee";

  drag(drop(ref));

  return (
    <div
      className="d-flex justify-content-between align-items-center py-1 px-3"
      ref={ref}
      style={{ backgroundColor: bgColor }}
      data-handler-id={collectedProps.handlerId}
    >
      {editedBulletId === id
        ? <input defaultValue={bulletText} onKeyUp={onKeyUp}/>
        : <>
          <AiFillEdit onClick={() => editBulletText(id)} />
          <span>{bulletText}</span>
          <span onClick={() => removeBullet(id)}>&times;</span>
        </>
      }
    </div>
  );
}
