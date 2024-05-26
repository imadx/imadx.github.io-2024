export const getSanitizedUrl = (url: string): string => {
  if (!url) return "#";

  try {
    const urlObj = new URL(url.startsWith("http") ? url : `https://${url}`);
    urlObj.protocol = urlObj.protocol.replace("http", "https");
    return urlObj.origin;
  } catch (exception) {
    return url;
  }
};
