const apiURL = "http://localhost/BTL/btl_web_core/api/collection";
export const fetchCollections = async () => {
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error("Failed to fetch collection data");
        }
        return await response.json();
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Propagate the error for handling in the calling component
      }
};