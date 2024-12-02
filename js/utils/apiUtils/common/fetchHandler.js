export const fetchGetHandler = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  console.log(response.status+", "+response.ok);
  if (response.status !== 200) {
    alert(await response.text());
    return null;
  }

  const data = await response.json(); // JSON 데이터를 파싱
  return data; // 받아온 JSON 데이터 반환
}

export const fetchPostHandler = async (url, bodyObj) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, body: JSON.stringify(bodyObj)
  });

  if (!response.ok) {
    alert(await response.text());
    return null;
  }
  return response.status;
}

export const fetchPostFormHandler = async (url, form) => {
  const response = await fetch(url, {
    method: "POST",
    body: form
  });

  if (!response.ok) {
    alert(await response.text());
    return null;
  }
  return response.status;
}

export const fetchPatchWithBody = async (url, bodyObj) => {
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    }, body: JSON.stringify(bodyObj)
  });

  if (!response.ok) {
    alert(await response.text());
    return null;
  }
  return response.status;
}

export const fetchPatchWithParams = async (url) => {
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    alert(await response.text());
    return null;
  }
  return response.status;
};

export const fetchDeleteHandler = async (url) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    alert(await response.text());
    return null;
  }
  return response.status;
}
