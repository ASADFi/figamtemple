"use client";

export const fetchData = async ( profileId ) => {
  try {
    // const profileId = 2; // Example profile ID
    const headers = {
      appKey: "XaysYnkaYpwnYArq",
    };
    const res = await fetch(
      `https://devprofiles.thundertechsol.com/devdock/get_protfolio_by_id?profile_id=${profileId}`,
      {
        headers: headers,
      }
    );
    const data = await res.json();
    return data;
    // console.log("API data:", data); // Log the data to the console
    // setPortfolioData(data);
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
  }
};
