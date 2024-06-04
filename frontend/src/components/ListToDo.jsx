import React, { useState, useEffect } from "react";
import axios from "axios";
import "../sass/ListToDo/todolist.css";
import Alert from "./CustomAlert";
import box_chat from "../img/box-chat/db-main-small.png";
import knife from "../img/box-chat/knife.png";
import phone_img from "../img/box-chat/phone-img.png";
import take_img from "../img/box-chat/take-ur-time.png";
import conf_cmd from "../img/alert-icon/conf-cmd.png";

const ListToDo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const MAX_TITLE_LENGTH = 30;
  const MAX_DESCRIPTION_LENGTH = 225;
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }, 1000);
    }
  }, [showAlert]);

  const createDataList = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/api/create-list",
        {
          title,
          description,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setShowAlert(true);
      setTimeout(() => {
        setTimeout(() => {
          setShowAlert(false);
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
        <div className="box-img-list">
          <svg className="borders-shadow">
            <polygon points="6,10 80,20 110,70 20,92" />
          </svg>
          <svg className="borders">
            <polygon points="0,10 80,20 110,75 20,95" />
          </svg>
          <svg className="outlines">
            <polygon points="10,10 80,13 110,63 25,80" />
          </svg>
          <svg className="outlines">
            <polygon points="10,10 80,13 110,63 25,80" />
          </svg>
        </div>
        <div className="title-list">
          <div className="todolist">
            <span className="lettering-under">CreateList</span>
            <span className="lettering">
              <span className="color">C</span>re
              <span className="color">a</span>
              te
              <span className="color">L</span>ist
            </span>
          </div>
          <div className="todo">
            <div className="profil">
              <form onSubmit={createDataList}>
                <div className="text-container">
                  <img className="text-box" src={box_chat} alt="" />
                  <img src={conf_cmd} alt="conf_cmd" className="conf_cmd" />
                  <input
                    value={title}
                    onChange={(e) => {
                      if (e.target.value.length <= MAX_TITLE_LENGTH) {
                        setTitle(e.target.value);
                      }
                    }}
                    className="text-input1"
                    type="text"
                    placeholder="Title"
                  />
                  <textarea
                    value={description}
                    onChange={(e) => {
                      if (e.target.value.length <= MAX_DESCRIPTION_LENGTH) {
                        setDescription(e.target.value);
                      }
                    }}
                    className="text-input2"
                    placeholder="your List"
                  />
                  <div className="wrap-btn">
                    <input className="submit" type="submit" id="bg-back" />
                    <img className="knfu-img" src={knife} alt="" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="todo-footer-title">
        <div className="show-todo-title">
          <span className="show-title">WHAT DO YOU WANT TO DO?</span>
        </div>
      </div>
    </div>
  );
};

export default ListToDo;
