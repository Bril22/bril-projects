import axios from "axios";
import * as cheerio from "cheerio";

export async function getCompanyHomepage(url: string) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Ambil URL dari meta tag OpenGraph (jika ada)
    const ogUrl = $('meta[property="og:url"]').attr("content");
    
    return ogUrl || url; // Gunakan URL asli jika OpenGraph tidak ditemukan
  } catch (error) {
    console.error("Error fetching homepage:", error);
    return null;
  }
}