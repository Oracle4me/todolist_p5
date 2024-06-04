import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../sass/ShowStyle/showstyle.css";
import knife from "../img/box-chat/knife.png";

const ShowList = () => {
  return (
    <div className="w-full h-full mb-32 ">
      <div className="relative flex mt-12 px-32 mb-0 py-2">
        <ListCardLoop />
      </div>
    </div>
  );
};

const CardList = ({ id, title, description, onDelete }) => {
  const [showImage, setShowImage] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowImage(!showImage);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <div className="relative flex">
      <div className="show-title1 banner">
        <div className="cs-title">
          <span className="s-title-txt">{title}</span>
        </div>
      </div>
      <img
        className={`pin ${showImage ? "show" : "hide"}`}
        src={knife}
        alt="Knife"
      />
      <div className="show-title2" onClick={handleClick}>
        <div className="cs-title">
          <span href="#" className="s-title-txt">
            P<span className="bg-single-word">i</span>n
          </span>
        </div>
      </div>
      <Link to={`/update/${id}`}>
        <div className="show-title3">
          <div className="cs-title">
            <span className="s-title-txt">
              Up<span className="bg-single-word">D</span>ate
            </span>
          </div>
        </div>
      </Link>
      <div className="show-title4" onClick={handleDeleteClick}>
        <div className="cs-title">
          <span href="#" className="s-title-txt">
            De<span className="bg-single-word">L</span>ete
          </span>
        </div>
      </div>
      <div className="box-todo-list">
        <svg className="phone-svg">
          <polygon points="10,0 300,0 290,100 290,310 5,310" />
        </svg>
        <svg className="screen-border-svg1">
          <polygon points="20,10 280,10 280,300 250,300 20,302" />
        </svg>
        <svg className="screen-border-svg2">
          <polygon points="25,14 270,18 265,297 23,297" />
        </svg>
        <span className="px-2 py-2 desc-cs max-w-[220px] max-h-[220px] absolute top-12 left-8 text-white overflow-hidden text scrollbar-none">
          {description}
        </span>
      </div>
    </div>
  );
};

const ListCardLoop = () => {
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/api/get-all-list/`);
      if (res.status === 200) {
        setTimeout(() => {
          const flitterData = res.data.map((item) => ({
            ...item,
            id: item._id,
          }));
          setShowList(flitterData);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteList = async (id) => {
    try {
      await axios
        .delete(`http://localhost:3001/api/delete-list/${id}`)
        .then(() => {
          fetchData();
        });
    } catch (err) {
      console.log(err);
    }
  };

  const showId = (id) => {
    console.log("Ur", id);
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      {showList.map((list, index) => (
        <CardList
          key={index}
          id={list._id}
          title={list.title}
          description={list.description}
          onDelete={() => deleteList(list._id)}
          onUpdate={showId}
        />
      ))}
    </div>
  );
};

export default ShowList;
