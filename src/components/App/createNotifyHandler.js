const endPoint = "http://35.201.2.209:8000/notify";
const data = {
  name: "Justin Rafael M. Salas",
  email: "justinsalasdev@gmail.com",
  repoUrl: "https://github.com/justinsalasdev/meldcx-demo",
  message: "I am really hoping to pass this test"
};

const createNotifyHandler = token => async () => {
  try {
    const options = {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    };

    const res = await fetch(endPoint, options);
    const textData = await res.text();

    if (res.status < 300) {
      alert(`${textData}`);
    } else {
      console.log(res);
      alert("notification failed");
    }
  } catch (err) {
    console.log(err);
    alert("notification failed");
  }
};

export default createNotifyHandler;
