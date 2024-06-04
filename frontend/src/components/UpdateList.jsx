import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../sass/ListToDo/todolist.css";
import Alert from "./CustomAlert";
import box_chat from "../img/box-chat/db-main-small.png";
import knife from "../img/box-chat/knife.png";
import phone_img from "../img/box-chat/phone-img.png";
import take_img from "../img/box-chat/take-ur-time.png";
import right_result from "../img/result/right-result.png";
import read from "../img/box-chat/reading-img.png";

const UpdateList = () => {
  const [getData, setGetData] = useState({
    title: "",
    description: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const MAX_TITLE_LENGTH = 30;
  const MAX_DESCRIPTION_LENGTH = 225;
  const { id } = useParams();
  const navigate = useNavigate();

  const getUpdateList = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `http://localhost:3001/api/update-list/${id}`,
        {
          title: getData.title,
          description: getData.description,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setShowAlert(true);
      setTimeout(() => {
        console.log("Successful");
        setTimeout(() => {
          setShowAlert(false);
          navigate("/");
        }, 3000);
      }, 0);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-full flex flex-col">
      {showAlert && <Alert />}
      <div className="bg_list">
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
          <img className="phone-img" src={phone_img} alt="phone-img" />
          <img className="take-img" src={take_img} alt="take-time" />
        </div>
        <div className="title-list">
          <div className="todolist">
            <span className="lettering-under">UpdateList</span>
            <span className="lettering">
              <span className="color">U</span>pd<span className="color">a</span>
              te
              <span className="color">L</span>ist
            </span>
          </div>
          <div className="todo">
            <div className="profil">
              <form onSubmit={getUpdateList}>
                <div className="text-container">
                  <img className="text-box" src={box_chat} alt="" />
                  <input
                    value={getData.title}
                    onChange={(e) => {
                      if (e.target.value.length <= MAX_TITLE_LENGTH) {
                        setGetData({
                          ...getData,
                          title: e.target.value,
                        });
                      }
                    }}
                    className="text-input1"
                    type="text"
                    placeholder="Title"
                  />
                  <textarea
                    value={getData.description}
                    onChange={(e) => {
                      if (e.target.value.length <= MAX_DESCRIPTION_LENGTH) {
                        setGetData({
                          ...getData,
                          description: e.target.value,
                        });
                      }
                    }}
                    className="text-input2"
                    placeholder="your List"
                  />
                </div>
                <div className="wrap-btn">
                  <input className="submit" type="submit" id="bg-back" />
                  <img className="knfu-img" src={knife} alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-32">
        <div className="relative flex justify-between w-full">
          <img className="" src={read} width={350} alt="read" />
          <img
            className="absolute right-12 bottom-32"
            src={right_result}
            width={400}
            height={100}
            alt="right-result"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateList;
