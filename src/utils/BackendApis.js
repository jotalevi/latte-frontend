import Cookies from "universal-cookie";

export default class BackendApis {
  static cookies = new Cookies();
  static baseUri = "http://latt3.com/api";
  static userData = false;

  static async isLogedIn() {
    return (await this.getUserData()) === false ? false : true;
  }

  static setRenew(renew) {
    this.renew = renew;
  }

  static getRenewToken() {
    return this.renew;
  }

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
      await fetch(`${this.baseUri}/u/login`, requestOptions)
    ).json();

    if (data.error_code || !data.token) return false;

    this.token = data.token;
    this.renew = data.renew;

    return true;
  }

  static async renewTokenIfNotLogedIn() {
    if (await this.isLogedIn()) {
      return true;
    }
    return this.renewToken();
  }

  static async renewToken() {
    if (this.renew === undefined) return false;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: this.renew.toString(),
      }),
    };

    let data = await (
      await fetch(`${this.baseUri}/u/renew`, requestOptions)
    ).json();

    if (data.error_code || !data.token) return false;

    this.token = data.token;
    this.renew = data.renew;

    this.cookies.set("renew", data.renew, { path: "/" });

    return true;
  }

  static async getUserData() {
    if (this.token === undefined) return false;

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    };

    let data = await (await fetch(`${this.baseUri}/u/`, requestOptions)).json();

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
      await fetch(`${this.baseUri}/homepage`, requestOptions)
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
      await fetch(`${this.baseUri}/a/${id}`, requestOptions)
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
      await fetch(`${this.baseUri}/a/${id}/${ep}`, requestOptions)
    ).json();

    if (data.error_code) return false;

    return data;
  }

  static async getSearch(query) {
    if (this.token === undefined) return {};

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    };

    let data = await (
      await fetch(`${this.baseUri}/search?search_str=${query}`, requestOptions)
    ).json();

    if (data.error_code) return false;

    return data;
  }
}
