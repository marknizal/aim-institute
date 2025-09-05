export const formatDate = (dateString, variant = "short") => {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (variant === "full") {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return `${day} ${month} ${year}, ${time}`;
  }

  if (variant === "long") {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  if (variant === "weekday") {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
};

export const formatDateDuration = (startDate, endDate) => {
  const startDateFormatted = formatDate(startDate, "short");
  const endDateFormatted = endDate ? formatDate(endDate, "short") : "Present";
  return `${startDateFormatted} - ${endDateFormatted}`;
};
