import React, { useState } from "react";
import ReactHTMLDatalist from "react-html-datalist";

const App = () => {
  const [detail, setDetail] = useState({ time: "" });

  const handleChange = e => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="App">
      <small>Выбери время: </small>
      <ReactHTMLDatalist
            name={"time"}
            onChange={handleChange}
            options={[
              { text: "6PM", value: "1" },
              { text: "3PM", value: "2" },
              { text: "1PM", value: "3" },
              { text: "5PM", value: "4" }
            ]}
      />
    </div>
    <small>Выбери аудиторию: </small>
      <ReactHTMLDatalist
            name={"audit"}
            onChange={handleChange}
            classNames={"classone classtwo"}
            options={[
              { text: "333", value: "1" },
              { text: "312", value: "2" },
              { text: "416", value: "3" },
              { text: "66", value: "4" }
            ]}
      />
      <small>Преподаватель: </small>
      <ReactHTMLDatalist
            name={"teach"}
            onChange={handleChange}
            classNames={"classone classtwo"}
            options={[
              { text: "Иванов", value: "1" },
              { text: "Титов", value: "2" },
              { text: "Старый", value: "3" },
              { text: "Михалыч", value: "4" }
            ]}
      />
      <small>Выбери название предмета: </small>
      <ReactHTMLDatalist
            name={"subj"}
            onChange={handleChange}
            classNames={"classone classtwo"}
            options={[
              { text: "Технология", value: "1" },
              { text: "Химия", value: "2" },
              { text: "Русский", value: "3" },
              { text: "НЕрусский", value: "4" }
            ]}
      />
      <small>Выбери группу: </small>
      <ReactHTMLDatalist
            name={"group"}
            onChange={handleChange}
            classNames={"classone classtwo"}
            options={[
              { text: "Умственно отсталые", value: "1" },
              { text: "НЕрусские", value: "2" },
              { text: "Кадеты", value: "3" },
              { text: "Школота", value: "4" }
            ]}
      />
    </>
  );
};

export default App;