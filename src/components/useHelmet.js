import { useEffect } from "react";

export function useMeta({ title, description, image, url }) {
  useEffect(() => {
    if (title) document.title = `${title} | Smc`;

    const setMetaTag = (attribute, value) => {
      let element = document.querySelector(`meta[${attribute}]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute.split("=")[0], attribute.split("=")[1].replace(/['"]/g, ""));
        document.head.appendChild(element);
      }
      element.setAttribute("content", value);
    };
    if (description) setMetaTag(`name="description"`, description);
    if (image) setMetaTag(`property="og:image"`, image);
    if (url) setMetaTag(`property="og:url"`, url);
    if (title) setMetaTag(`property="og:title"`, title);
    if (description) setMetaTag(`property="og:description"`, description);
    if (title) setMetaTag(`name="twitter:title"`, title);
    if (description) setMetaTag(`name="twitter:description"`, description);
    if (image) setMetaTag(`name="twitter:image"`, image);
  }, [title, description, image, url]);
}
