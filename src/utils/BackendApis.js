export default class BackendApis {
  static async login(username, password) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username.toString(),
        password: password.toString(),
      }),
    };

    let data = await (
      await fetch("http://localhost:3001/u/login", requestOptions)
    ).json();

    if (data.error_code || !data.token) return false;

    this.token = data.token;

    return true;
  }

  static async getUserData() {
    if (this.token === undefined) return {};

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    };

    let data = await (
      await fetch("http://localhost:3001/u/", requestOptions)
    ).json();

    if (data.error_code) return false;

    return data;
  }

  static async getHomePage() {
    if (this.token === undefined) return {};

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    };

    let data = await (
      await fetch("http://localhost:3001/homepage", requestOptions)
    ).json();

    if (data.error_code) return false;

    return data;
  }

  static async getAnime(id) {
    if (this.token === undefined) return {};

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    };

    let data = await (
      await fetch(`http://localhost:3001/a/${id}`, requestOptions)
    ).json();

    if (data.error_code) return false;

    return data;
  }

  static async getEpisode(id, ep) {
    if (this.token === undefined) return {};

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    };

    let data = await (
      await fetch(`http://localhost:3001/a/${id}/${ep}`, requestOptions)
    ).json();

    if (data.error_code) return false;

    return data;
  }
}
