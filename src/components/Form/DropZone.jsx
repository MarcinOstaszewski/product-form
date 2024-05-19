import React, { useCallback, useEffect, useState } from "react";
import update from "immutability-helper";
import { Draggable } from "./Draggable";

export function DropZone(
  { bullets, removeBullet }
) {
  const [draggableBullets, setDraggableList] = useState([]);

  useEffect(() => {
    setDraggableList([...bullets]);
  }, [bullets]);

  const moveRow = useCallback((dragIndex, hoverIndex) => {
    setDraggableList((prevBullet) =>
      update(prevBullet, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevBullet[dragIndex]],
        ],
      })
    );
  }, []);

  const renderBullets = () =>
    draggableBullets?.map((bullet, index) => (
      <Draggable
        index={index}
        key={bullet.id}
        bullet={bullet}
        moveRow={moveRow}
        removeBullet={removeBullet}
      />
    ));

  return (
    <div className="w-100 d-flex flex-column items-center p-2 gap-2 mb-4 ">
      {renderBullets()}
    </div>
  );
}
