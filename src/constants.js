console.log(process.env.PORT);
const HOST =
    process.env.PORT !== undefined
        ? "https://henrygadgets-backend.herokuapp.com/"
        : "http://localhost:3001";

export default HOST;
