import axios from "axios";

export default axios.create({
  baseURL: "https://s3.ap-southeast-2.amazonaws.com"
});