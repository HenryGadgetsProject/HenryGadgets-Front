const HOST =
  process.env.REACT_APP_VERCEL_ENV !== undefined
    ? "https://henrygadgets-backend.herokuapp.com"
    : "http://localhost:3001";

export default HOST;
