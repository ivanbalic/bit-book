const getRequestHeader = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Key: "bitbookdev",
    SessionId: sessionStorage.getItem("sessionId")
  }
};

const postRequestHeader = data => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Key: "bitbookdev",
    SessionId: sessionStorage.getItem("sessionId")
  },
  body: JSON.stringify(data)
});

const deleteRequestHeader = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Key: "bitbookdev",
    SessionId: sessionStorage.getItem("sessionId")
  }
};

const putRequestHeader = data => {
  return {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Key: "bitbookdev",
      SessionId: sessionStorage.getItem("sessionId")
    },
    body: JSON.stringify(data)
  };
};

const authHeader = data => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Key: "bitbookdev"
    },
    body: JSON.stringify(data)
  };
};

export {
  authHeader,
  getRequestHeader,
  putRequestHeader,
  postRequestHeader,
  deleteRequestHeader
};
