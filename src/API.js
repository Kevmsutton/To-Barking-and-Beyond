class API {
  static signin(user) {
    return fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(user)
    }).then(resp => resp.json());
  }
  static validate() {
    return this.get(`http://localhost:3000/validate`);
  }

  static getJourneys() {
    return this.get(`http://localhost:3000/journeys`);
  }

  static get(url) {
    return fetch(url, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(resp => resp.json());
  }
}

window.API = API;

export default API;
