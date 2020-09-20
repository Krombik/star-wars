const key = "AIzaSyAVJGVgREJdA70A9P-hTX-E-amZn7079sw";
const cx = "6db06b2840cb2b1cd";

const getGoogleSearchUrl = (search: string) =>
  `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${encodeURIComponent(
    `star wars ${search}`
  )}&searchType=image&imgSize=xlarge`;

export default getGoogleSearchUrl;
