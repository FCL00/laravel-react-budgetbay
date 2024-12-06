/**
 * Formats a date string into a more readable format.
 * @param {string} dateString - The date string to format (ISO 8601 format).
 * @returns {string} - The formatted date.
 */
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };