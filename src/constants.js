console.log(process.env);
const HOST =
    process.env.PORT !== undefined
        ? "https://henrygadgets-backend.herokuapp.com/"
        : "http://localhost:3001";

export default HOST;
