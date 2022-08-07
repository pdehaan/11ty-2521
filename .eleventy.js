const markdownIt = require("markdown-it");

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
module.exports = function (eleventyConfig) {
  const mdOptions = {
    html: true,
    breaks: true,
    linkify: true
  };

  eleventyConfig.setLibrary("md", markdownIt(mdOptions).disable("code"));

  return {
    dir: {
      input: "src",
      output: "www",
    },
    markdownTemplateEngine: "njk",
  
  };
};
