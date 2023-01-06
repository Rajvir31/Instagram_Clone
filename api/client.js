import sanityClient from "@sanity/client";
import dotenv from "dotenv";
dotenv.config()

export default sanityClient({
    projectId: "0rqjjani",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-12-14",
    token: process.env.SANITY_API_TOKEN,
});