export const fetchGetHandler = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json(); // JSON 데이터를 파싱
    return data; // 받아온 JSON 데이터 반환
  } catch (error) {
    console.error("Error fetching GET:", error);
    return null; // 에러 발생 시 null 반환
  }
}

export const fetchPostHandler = async (url, bodyObj) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(bodyObj)
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json(); // JSON 데이터를 파싱
    return data; // 받아온 JSON 데이터 반환
  } catch (error) {
    console.error("Error fetching POST:", error);
    return null; // 에러 발생 시 null 반환
  }
}

export const fetchPatchHandler = async (url, bodyObj) => {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(bodyObj)
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json(); // JSON 데이터를 파싱
    return data; // 받아온 JSON 데이터 반환
  } catch (error) {
    console.error("Error fetching PATCH:", error);
    return null; // 에러 발생 시 null 반환
  }
}

export const fetchDeleteHandler = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json(); // JSON 데이터를 파싱
    return data; // 받아온 JSON 데이터 반환
  } catch (error) {
    console.error("Error fetching DELETE:", error);
    return null; // 에러 발생 시 null 반환
  }
}
